package com.sims.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Furniture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;

    private String itemName;
    private String category;
    private String material;
    private BigDecimal price;
    private int stock;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private User supplier;
}
