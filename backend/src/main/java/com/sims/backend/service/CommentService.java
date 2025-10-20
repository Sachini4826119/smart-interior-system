package com.sims.backend.service;

import com.sims.backend.entity.Comment;
import com.sims.backend.entity.Project;
import com.sims.backend.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    // Get all comments
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    // Get comments by project
    public List<Comment> getCommentsByProject(Project project) {
        return commentRepository.findByProject(project);
    }

    // Save comment
    public Comment saveComment(Comment comment) {
        return commentRepository.save(comment);
    }
}
