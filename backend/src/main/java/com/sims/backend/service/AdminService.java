package com.sims.backend.service;

import com.sims.backend.entity.User;
import com.sims.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Convert Integer to Long before deleting
    public void deleteUser(Integer userId) {
        if (userId != null) {
            userRepository.deleteById(userId.longValue());
        }
    }

    // Or change method parameter to Long
    public void deleteUser(Long userId) {
        if (userId != null) {
            userRepository.deleteById(userId);
        }
    }

    // Add more admin-specific functions here
}
