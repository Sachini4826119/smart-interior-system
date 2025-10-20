package com.sims.backend.service;

import com.sims.backend.entity.Receipt;
import com.sims.backend.entity.Project;
import com.sims.backend.entity.User;
import com.sims.backend.repository.ReceiptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReceiptService {

    @Autowired
    private ReceiptRepository receiptRepository;

    public Receipt saveReceipt(Receipt receipt) {
        return receiptRepository.save(receipt);
    }

    public List<Receipt> getAllReceipts() {
        return receiptRepository.findAll();
    }

    public Optional<Receipt> getReceiptById(Long id) {
        return receiptRepository.findById(id);
    }

    public List<Receipt> getReceiptsByCustomer(User customer) {
        return receiptRepository.findByCustomer(customer);
    }

    public List<Receipt> getReceiptsBySupplier(User supplier) {
        return receiptRepository.findBySupplier(supplier);
    }

    public List<Receipt> getReceiptsByProject(Project project) {
        return receiptRepository.findByProject(project);
    }

    public void deleteReceipt(Long id) {
        receiptRepository.deleteById(id);
    }
}
