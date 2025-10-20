package com.sims.backend.repository;

import com.sims.backend.entity.Material;
import com.sims.backend.entity.Project;
import com.sims.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MaterialRepository extends JpaRepository<Material, Long> {
    List<Material> findByProject(Project project);

    List<Material> findBySupplier(User supplier);
}
