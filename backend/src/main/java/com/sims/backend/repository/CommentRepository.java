package com.sims.backend.repository;

import com.sims.backend.entity.Comment;
import com.sims.backend.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    // Custom query method to fetch comments by project
    List<Comment> findByProject(Project project);
}
