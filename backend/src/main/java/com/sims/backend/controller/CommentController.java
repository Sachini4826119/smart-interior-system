package com.sims.backend.controller;

import com.sims.backend.entity.Comment;
import com.sims.backend.entity.Project;
import com.sims.backend.service.CommentService;
import com.sims.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Autowired
    private ProjectService projectService;

    // Get all comments
    @GetMapping("/comments")
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

    // Get comments by project ID
    @GetMapping("/comments/project/{projectId}")
    public List<Comment> getCommentsByProject(@PathVariable Long projectId) {
        Project project = projectService.getProjectById(projectId); // ✔
        if (project != null) {
            return commentService.getCommentsByProject(project);
        } else {
            return List.of(); // Return empty list if project not found
        }
    }

    // Add comment to project
    @PostMapping("/comments/project/{projectId}")
    public Comment addCommentToProject(@PathVariable Long projectId, @RequestBody Comment comment) {
        Project project = projectService.getProjectById(projectId); // ✔
        if (project != null) {
            comment.setProject(project);
            return commentService.saveComment(comment);
        } else {
            throw new RuntimeException("Project not found with ID: " + projectId);
        }
    }
}
