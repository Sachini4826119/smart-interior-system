package com.sims.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import jakarta.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private Double budget;

    @ManyToOne
    @JoinColumn(name = "designer_id")
    private User designer; // Designer User

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private User customer; // Customer User

    // Add missing getDesigner() method
    public User getDesigner() {
        return designer;
    }

    public User getCustomer() {
        return customer;
    }

    // Other fields & methods...
}