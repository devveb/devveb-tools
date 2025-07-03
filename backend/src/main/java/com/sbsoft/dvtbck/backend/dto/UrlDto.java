package com.sbsoft.dvtbck.backend.dto;

public class UrlDto {
    private Long idx;
    private String shortCode;
    private String shortUrl;
    private String originalUrl;

    // 생성자
    public UrlDto() {}

    public UrlDto(Long idx) {
        this.idx = idx;
        this.shortCode = encodeToBase64(idx);
    }

    // Getter & Setter
    public Long getIdx() { return idx; }
    public void setIdx(Long idx) {
        this.idx = idx;
        this.shortCode = encodeToBase64(idx); // 자동으로 shortCode 세팅
    }

    public String getShortUrl() {
        return shortUrl;
    }

    public void setShortUrl(String shortUrl) {
        this.shortUrl = shortUrl;
    }


    public String getShortCode() { return shortCode; }
    public void setShortCode(String shortCode) {
        this.shortCode = shortCode;
        this.idx = decodeFromBase64(shortCode); // 역변환도 가능하게
    }

    // 인코딩/디코딩 유틸
    private static final String BASE64_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

    private static String encodeToBase64(long number) {
        if (number == 0) return "0";
        StringBuilder result = new StringBuilder();
        while (number > 0) {
            int remainder = (int) (number % 64);
            result.insert(0, BASE64_CHARS.charAt(remainder));
            number /= 64;
        }
        return result.toString();
    }

    private static long decodeFromBase64(String base64) {
        long result = 0;
        for (int i = 0; i < base64.length(); i++) {
            int index = BASE64_CHARS.indexOf(base64.charAt(i));
            if (index == -1) throw new IllegalArgumentException("Invalid character: " + base64.charAt(i));
            result = result * 64 + index;
        }
        return result;
    }


    public String getOriginalUrl() {
        return originalUrl;
    }
}
