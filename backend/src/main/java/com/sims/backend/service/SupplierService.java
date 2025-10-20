package com.sims.backend.service;

import com.sims.backend.entity.Supplier;
import com.sims.backend.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierService {
    @Autowired
    private SupplierRepository supplierRepository;

    public List<Supplier> getAllSuppliers() { return supplierRepository.findAll(); }

    public Supplier createSupplier(Supplier supplier) { return supplierRepository.save(supplier); }

    public Supplier updateSupplier(Long id, Supplier supplier) {
        Optional<Supplier> existing = supplierRepository.findById(id);
        if (existing.isPresent()) {
            supplier.setId(id);
            return supplierRepository.save(supplier);
        }
        return null;
    }

    public void deleteSupplier(Long id) { supplierRepository.deleteById(id); }
}
