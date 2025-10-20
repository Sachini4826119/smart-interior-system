package com.sims.backend.service;

import com.sims.backend.entity.Material;
import com.sims.backend.entity.Project;
import com.sims.backend.entity.User;
import com.sims.backend.repository.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MaterialService {

    @Autowired
    private MaterialRepository materialRepository;

    public Material saveMaterial(Material material) {
        return materialRepository.save(material);
    }

    public List<Material> getAllMaterials() {
        return materialRepository.findAll();
    }

    public Optional<Material> getMaterialById(Long id) {
        return materialRepository.findById(id);
    }

    public List<Material> getMaterialsByProject(Project project) {
        return materialRepository.findByProject(project);
    }

    public List<Material> getMaterialsBySupplier(User supplier) {
        return materialRepository.findBySupplier(supplier);
    }

    public void deleteMaterial(Long id) {
        materialRepository.deleteById(id);
    }
}
