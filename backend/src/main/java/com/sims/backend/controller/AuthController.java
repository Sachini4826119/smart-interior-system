package com.sims.backend.controller;

import com.sims.backend.entity.User;
import com.sims.backend.repository.UserRepository;
import com.sims.backend.security.JwtUtil;
import com.sims.backend.payload.RegisterRequest;
import com.sims.backend.payload.LoginRequest;
import com.sims.backend.payload.LoginResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // ---------------- Register User ----------------
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest registerRequest) {
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        // Create new user
        User user = new User();
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setName(registerRequest.getName());

        // Set optional fields if provided
        if (registerRequest.getPhone() != null && !registerRequest.getPhone().isEmpty()) {
            user.setPhone(registerRequest.getPhone());
        }
        if (registerRequest.getAddress() != null && !registerRequest.getAddress().isEmpty()) {
            user.setAddress(registerRequest.getAddress());
        }

        // Clean and map role string to handle frontend labels
        String roleStr = registerRequest.getRole().toUpperCase().replaceAll("[^A-Z]", "");

        // Map descriptive/common variants
        if ("CUSTOMERHOMEOWNER".equals(roleStr)) {
            roleStr = "CUSTOMER";
        } else if ("SUPPLIER".equals(roleStr) || "SUPPLER".equals(roleStr)) {
            roleStr = "SUPPLIER";
        } else if ("DESIGNER".equals(roleStr)) {
            roleStr = "DESIGNER";
        } else if ("ADMIN".equals(roleStr)) {
            roleStr = "ADMIN";
        }

        try {
            user.setRole(User.Role.valueOf(roleStr));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                    .body("Error: Invalid role! Valid options: CUSTOMER, DESIGNER, SUPPLIER, ADMIN.");
        }

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");
    }

    // ---------------- Login User ----------------
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());
        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Error: Invalid email or password");
        }

        User user = userOpt.get();

        if (!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body("Error: Invalid email or password");
        }

        // Generate JWT token
        String token = jwtUtil.generateToken(user);

        return ResponseEntity.ok(new LoginResponse(token, user.getName(), user.getEmail(), user.getRole()));
    }
}