package com.sims.backend.controller;

import com.sims.backend.entity.Receipt;
import com.sims.backend.service.ReceiptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/receipts")
public class ReceiptController {

    @Autowired
    private ReceiptService receiptService;

    // ---------------- Add Receipt ----------------
    @PostMapping("/add")
    public ResponseEntity<Receipt> addReceipt(@RequestBody Receipt receipt) {
        return ResponseEntity.ok(receiptService.saveReceipt(receipt));
    }

    // ---------------- Get All Receipts ----------------
    @GetMapping("/all")
    public ResponseEntity<List<Receipt>> getAllReceipts() {
        return ResponseEntity.ok(receiptService.getAllReceipts());
    }

    // ---------------- Get Receipt by ID ----------------
    @GetMapping("/{id}")
    public ResponseEntity<Receipt> getReceiptById(@PathVariable Long id) {
        return receiptService.getReceiptById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
