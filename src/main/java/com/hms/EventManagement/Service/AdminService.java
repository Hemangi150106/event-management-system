package com.hms.EventManagement.Service;

import com.hms.EventManagement.EventRepo.AdminRepo;
import com.hms.EventManagement.Model.Admin;
import com.hms.EventManagement.Model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    public AdminRepo adminRepo;

    public Admin insertAdmin(Admin admin) {
        return adminRepo.save(admin);
    }

    public Admin loginAdmin(String username, String password) {

        Admin admin = adminRepo.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!admin.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return admin;
    }
}
