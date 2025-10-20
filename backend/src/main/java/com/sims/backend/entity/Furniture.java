package com.sims.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Furniture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
}
