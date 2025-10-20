package com.sims.backend.repository;

import com.sims.backend.entity.Receipt;
import com.sims.backend.entity.Project;
import com.sims.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReceiptRepository extends JpaRepository<Receipt, Long> {
    List<Receipt> findByCustomer(User customer);

    List<Receipt> findBySupplier(User supplier);

    List<Receipt> findByProject(Project project);
}
