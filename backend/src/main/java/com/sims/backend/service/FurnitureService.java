package com.sims.backend.service;

import com.sims.backend.entity.Furniture;
import com.sims.backend.entity.User;
import com.sims.backend.repository.FurnitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FurnitureService {

    @Autowired
    private FurnitureRepository furnitureRepository;

    public Furniture saveFurniture(Furniture furniture) {
        return furnitureRepository.save(furniture);
    }

    public List<Furniture> getAllFurniture() {
        return furnitureRepository.findAll();
    }

    public Optional<Furniture> getFurnitureById(Long id) {
        return furnitureRepository.findById(id);
    }

    public List<Furniture> getFurnitureBySupplier(User supplier) {
        return furnitureRepository.findBySupplier(supplier);
    }

    public void deleteFurniture(Long id) {
        furnitureRepository.deleteById(id);
    }
}
