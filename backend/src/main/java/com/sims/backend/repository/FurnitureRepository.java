package com.sims.backend.repository;

import com.sims.backend.entity.Furniture;
import com.sims.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FurnitureRepository extends JpaRepository<Furniture, Long> {
    List<Furniture> findBySupplier(User supplier);
}
