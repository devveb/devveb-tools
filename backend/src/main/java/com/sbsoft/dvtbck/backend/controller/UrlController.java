package com.sbsoft.dvtbck.backend.controller;

import com.sbsoft.dvtbck.backend.dto.UrlDto;
import com.sbsoft.dvtbck.backend.service.UrlService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("urlshrtn")
public class UrlController {

    UrlService urlService;

    public UrlController(UrlService urlService) {
        this.urlService = urlService;
    }

    @PostMapping("/shrnk")
    public UrlDto urlShortner(@RequestBody UrlDto urlDto) {
        return urlService.usrShort(urlDto);
    }


}
