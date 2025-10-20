package com.sims.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "designer_details")
public class DesignerDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String designStyle;
    private int experienceYears;
    private String portfolioLink;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user; // This links back to User
}
