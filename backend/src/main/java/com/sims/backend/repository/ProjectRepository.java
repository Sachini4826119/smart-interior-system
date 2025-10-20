package com.sims.backend.repository;

import com.sims.backend.entity.Project;
import com.sims.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByCustomer(User customer);

    List<Project> findByDesigner(User designer);
}
