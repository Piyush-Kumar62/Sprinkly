package com.url.shortner.service;

import com.url.shortner.models.User;
import com.url.shortner.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

  @Autowired
  private UserRepository userRepository;

  @Override
  @Transactional
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    // Logic: Try finding by Email first. If not found, try Username.
    User user = userRepository.findByEmail(username)
        .orElseGet(() -> userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException(
                "User Not Found with email/username: " + username)));

    return UserDetailsImpl.build(user);
  }
}