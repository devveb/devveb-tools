package com.sbsoft.dvtbck.backend.repository;

import com.sbsoft.dvtbck.backend.entity.UrlEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UrlRepository extends JpaRepository<UrlEntity, Long> {
    int countByOriginalUrl(String originalUrl);
    Optional<UrlEntity> findByOriginalUrl(String originalUrl);

}
