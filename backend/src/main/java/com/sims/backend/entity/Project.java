package com.sims.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data // Lombok automatically generates getters and setters
@NoArgsConstructor
@AllArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // ✅ used in getName()
    private String description; // ✅ used in getDescription()
    private String title; // ✅ used in getTitle()
    private String status; // ✅ used in getStatus()

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer; // ✅ used in getCustomer()
}
