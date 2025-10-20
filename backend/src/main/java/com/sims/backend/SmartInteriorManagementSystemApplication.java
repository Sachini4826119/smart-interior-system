package com.sims.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "com.sims.backend" }) // Scans all sub-packages (config, controller, entity,
                                                                  // etc.)
public class SmartInteriorManagementSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(SmartInteriorManagementSystemApplication.class, args);
    }
}