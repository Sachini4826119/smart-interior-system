package com.sims.backend.service;

import com.sims.backend.entity.Furniture;
import com.sims.backend.repository.FurnitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FurnitureService {
    @Autowired
    private FurnitureRepository furnitureRepository;

    public List<Furniture> getAllFurniture() { return furnitureRepository.findAll(); }

    public Furniture createFurniture(Furniture furniture) { return furnitureRepository.save(furniture); }

    public Furniture updateFurniture(Long id, Furniture furniture) {
        Optional<Furniture> existing = furnitureRepository.findById(id);
        if (existing.isPresent()) {
            furniture.setId(id);
            return furnitureRepository.save(furniture);
        }
        return null;
    }

    public void deleteFurniture(Long id) { furnitureRepository.deleteById(id); }
}
