package com.sims.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "supplier_details")
public class SupplierDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String companyName;
    private String materialType;
    private String contactNumber;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user; // This links back to User
}
