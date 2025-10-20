package com.sims.backend.controller;

import com.sims.backend.entity.Project;
import com.sims.backend.entity.User;
import com.sims.backend.service.AIService;
import com.sims.backend.service.ProjectService;
import com.sims.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ai")
public class AIController {

    @Autowired
    private AIService aiService;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private UserService userService;

    @GetMapping("/projects")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/project/{id}/designer")
    public User getDesignerDetails(@PathVariable Long id) {
        Project project = projectService.getProjectById(id);
        if (project == null) {
            return null;
        }
        return aiService.getDesignerDetails(project);
    }

    // Add more endpoints for AI functionalities (e.g., @PostMapping for
    // suggestions)
}