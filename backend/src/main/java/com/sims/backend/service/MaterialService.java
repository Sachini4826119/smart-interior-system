package com.sims.backend.service;

import com.sims.backend.entity.Material;
import com.sims.backend.repository.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaterialService {
    @Autowired
    private MaterialRepository materialRepository;

    public List<Material> getAllMaterials() { return materialRepository.findAll(); }

    public Material createMaterial(Material material) { return materialRepository.save(material); }

    public Material updateMaterial(Long id, Material material) {
        Optional<Material> existing = materialRepository.findById(id);
        if (existing.isPresent()) {
            material.setId(id);
            return materialRepository.save(material);
        }
        return null;
    }

    public void deleteMaterial(Long id) { materialRepository.deleteById(id); }
}
