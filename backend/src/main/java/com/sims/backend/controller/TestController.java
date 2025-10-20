package com.sims.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/ping")
    public String ping() {
        return "Backend is running!";
    }

    @GetMapping("/hello")
    public String hello() {
        return "Welcome to Smart Interior Management System API!";
    }
}
