package com.sbsoft.dvtbck.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_link")
public class UrlEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // PostgreSQL의 SERIAL/IDENTITY와 연동
    private Long idx;

    private String originalUrl;

    @Column(insertable = false, updatable = true)
    private String shortUrl;

    // Getter/Setter
    public Long getIdx() { return idx; }
    public void setIdx(Long idx) { this.idx = idx; }

    public String getOriginalUrl() { return originalUrl; }
    public void setOriginalUrl(String originalUrl) { this.originalUrl = originalUrl; }

    public String getShortUrl() { return shortUrl; }
    public void setShortUrl(String shortUrl) { this.shortUrl = shortUrl; }
}
