package com.sbsoft.dvtbck.backend.service;

import com.sbsoft.dvtbck.backend.dto.UrlDto;
import com.sbsoft.dvtbck.backend.entity.UrlEntity;
import com.sbsoft.dvtbck.backend.repository.UrlRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UrlService {

    private final UrlRepository urlRepository;

    public UrlService(UrlRepository urlRepository) {
        this.urlRepository = urlRepository;
    }

    public UrlDto usrShort(UrlDto urlDto) {

        if(urlRepository.countByOriginalUrl(urlDto.getOriginalUrl()) <= 0){
        UrlEntity entity = new UrlEntity();
        entity.setOriginalUrl(urlDto.getOriginalUrl());
        UrlEntity saved = urlRepository.save(entity);
        urlDto.setIdx(saved.getIdx());
        urlDto.setShortUrl("https//mlnl.me/"+saved.getIdx());
        saved.setShortUrl(urlDto.getShortUrl());
        urlRepository.save(saved);
        }else{
            urlDto.setShortUrl(urlRepository.findByOriginalUrl(urlDto.getOriginalUrl()).get().getShortUrl());
        }
        return urlDto;

    }
}
