package com.url.shortner.repository;

import com.url.shortner.models.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  // UNCOMMENT THIS LINE so the service can use it as a backup
  Optional<User> findByUsername(String username);

  // Keep this line for Email login
  Optional<User> findByEmail(String email);
}