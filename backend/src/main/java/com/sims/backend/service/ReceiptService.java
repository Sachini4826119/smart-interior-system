package com.sims.backend.service;

import com.sims.backend.entity.Receipt;
import com.sims.backend.repository.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReceiptService {
    @Autowired
    private ReceiptRepository receiptRepository;

    public List<Receipt> getAllReceipts() { return receiptRepository.findAll(); }

    public Receipt createReceipt(Receipt receipt) { return receiptRepository.save(receipt); }

    public Receipt updateReceipt(Long id, Receipt receipt) {
        Optional<Receipt> existing = receiptRepository.findById(id);
        if (existing.isPresent()) {
            receipt.setId(id);
            return receiptRepository.save(receipt);
        }
        return null;
    }

    public void deleteReceipt(Long id) { receiptRepository.deleteById(id); }
}
