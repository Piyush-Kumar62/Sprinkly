package com.url.shortner.controller;

import com.url.shortner.dtos.ClickEventDTO;
import com.url.shortner.dtos.UrlMappingDTO;
import com.url.shortner.models.User;
import com.url.shortner.service.UrlMappingService;
import com.url.shortner.service.UserService;
import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/urls")
@AllArgsConstructor
public class UrlMappingController {

  private UrlMappingService urlMappingService;
  private UserService userService;
// {"originalUrl":"https://example.com"}
  // https://abc.com/nRcyEkZy --> https://example.com


  @PostMapping("/shorten")
  @PreAuthorize("hasRole('USER')")
  public ResponseEntity<UrlMappingDTO> createShortUrl(@RequestBody Map<String, String> request,
      Principal principal) {
    String originalUrl = request.get("originalUrl");
    User user = userService.findByUsername(principal.getName());
    UrlMappingDTO urlMappingDTO = urlMappingService.createShortUrl(originalUrl, user);
    return ResponseEntity.ok(urlMappingDTO);

  }

  @GetMapping("/myurls")
  @PreAuthorize("hasRole('USER')")
  public ResponseEntity<List<UrlMappingDTO>> getUserUrls(Principal principal) {
    User user = userService.findByUsername(principal.getName());
    List<UrlMappingDTO> urls = urlMappingService.getUrlsByUser(user);
    return ResponseEntity.ok(urls);
  }

  @GetMapping("/analytics/{shortUrl}")
  @PreAuthorize("hasRole('USER')")
  public ResponseEntity<List<ClickEventDTO>> getUrlAnalytics(@PathVariable String shortUrl,
      @RequestParam("startDate") String startDate,
      @RequestParam("endDate") String endDate) {
    DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
    LocalDateTime start = LocalDateTime.parse(startDate, formatter);
    LocalDateTime end = LocalDateTime.parse(endDate, formatter);
    List<ClickEventDTO> clickEventDTOS = urlMappingService.getClickEventByDate(shortUrl, start,
        end);
    return ResponseEntity.ok(clickEventDTOS);
  }

  @GetMapping("/totalClicks")
  @PreAuthorize("hasRole('USER')")
  public ResponseEntity<Map<LocalDate, Long>> getTotalCLicksByDate(Principal principal,
      @RequestParam("startDate") String startDate,
      @RequestParam("endDate") String endDate) {

    DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE;
    User user = userService.findByUsername(principal.getName());
    LocalDate start = LocalDate.parse(startDate, formatter);
    LocalDate end = LocalDate.parse(endDate, formatter);
    Map<LocalDate, Long> totalClicks = urlMappingService.getTotalClicksByUserAndDate(
        user, start,
        end);
    return ResponseEntity.ok(totalClicks);
  }
}
