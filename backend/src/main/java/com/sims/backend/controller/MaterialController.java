package com.sims.backend.controller;

import com.sims.backend.entity.Material;
import com.sims.backend.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/materials")
public class MaterialController {

    @Autowired
    private MaterialService materialService;

    // ---------------- Add Material ----------------
    @PostMapping("/add")
    public ResponseEntity<Material> addMaterial(@RequestBody Material material) {
        return ResponseEntity.ok(materialService.saveMaterial(material));
    }

    // ---------------- Get All Materials ----------------
    @GetMapping("/all")
    public ResponseEntity<List<Material>> getAllMaterials() {
        return ResponseEntity.ok(materialService.getAllMaterials());
    }

    // ---------------- Delete Material ----------------
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMaterial(@PathVariable Long id) {
        materialService.deleteMaterial(id);
        return ResponseEntity.ok("Material deleted");
    }
}
