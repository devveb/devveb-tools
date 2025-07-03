package com.sbsoft.dvtbck.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {


    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**").allowedOrigins("http://localhost:3000").allowedMethods("*");
        registry.addMapping("/**").allowedOrigins("http://localhost:5173").allowedMethods("*");
        registry.addMapping("/**") // 모든 경로에 대해
                .allowedOrigins("https://devveb-tools-1.onrender.com") // 프론트 도메인
                .allowedMethods("*") // GET, POST 등 모두 허용
                .allowedHeaders("*")
                .allowCredentials(false);
    }
}
