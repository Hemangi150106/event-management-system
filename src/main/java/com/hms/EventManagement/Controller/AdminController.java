package com.hms.EventManagement.Controller;


import com.hms.EventManagement.Model.Admin;
import com.hms.EventManagement.Model.Student;
import com.hms.EventManagement.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    public AdminService adminService;

    @PostMapping("/insert")
    public Admin insertAdmin(@RequestBody Admin admin){
        return adminService.insertAdmin(admin);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody Admin admin) {

        try {
            Admin loggedInAdmin = adminService.loginAdmin(
                    admin.getUsername(),
                    admin.getPassword()
            );
            return ResponseEntity.ok(loggedInAdmin);
        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(e.getMessage());
        }
    }

}
