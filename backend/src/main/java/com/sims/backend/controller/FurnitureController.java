package com.sims.backend.controller;

import com.sims.backend.entity.Furniture;
import com.sims.backend.entity.User;
import com.sims.backend.service.FurnitureService;
import com.sims.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/furniture")
public class FurnitureController {

    @Autowired
    private FurnitureService furnitureService;

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public ResponseEntity<Furniture> addFurniture(@RequestBody Furniture furniture) {
        return ResponseEntity.ok(furnitureService.saveFurniture(furniture));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Furniture>> getAllFurniture() {
        return ResponseEntity.ok(furnitureService.getAllFurniture());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFurniture(@PathVariable Long id) {
        furnitureService.deleteFurniture(id);
        return ResponseEntity.ok("Furniture deleted");
    }
}
