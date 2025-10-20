package com.sims.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomId;

    private String roomType;
    private BigDecimal length;
    private BigDecimal width;
    private BigDecimal height;
    private BigDecimal budget;

    @OneToOne
    @JoinColumn(name = "project_id", unique = true)
    private Project project;
}
