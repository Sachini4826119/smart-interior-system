package com.sims.backend.service;

import com.sims.backend.entity.Project;
import com.sims.backend.entity.User;
import com.sims.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AIService {

    @Autowired
    private UserRepository userRepository;

    // Fetch designer details for a given project
    public User getDesignerDetails(Project project) {
        if (project == null) {
            return null;
        }

        // Replace this with the correct field/method from your Project entity
        Long designerId = null;

        // Example: if Project has a getDesigner() method
        if (project.getDesigner() != null) {
            designerId = project.getDesigner().getId();
        }

        if (designerId == null) {
            return null;
        }

        // Fetch the designer user from the repository
        return userRepository.findById(designerId).orElse(null);
    }
}
