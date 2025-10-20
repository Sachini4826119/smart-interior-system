package com.sims.backend.service;

import com.sims.backend.entity.Designer;
import com.sims.backend.repository.DesignerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DesignerService {
    @Autowired
    private DesignerRepository designerRepository;

    public List<Designer> getAllDesigners() { return designerRepository.findAll(); }

    public Designer createDesigner(Designer designer) { return designerRepository.save(designer); }

    public Designer updateDesigner(Long id, Designer designer) {
        Optional<Designer> existing = designerRepository.findById(id);
        if (existing.isPresent()) {
            designer.setId(id);
            return designerRepository.save(designer);
        }
        return null;
    }

    public void deleteDesigner(Long id) { designerRepository.deleteById(id); }
}
