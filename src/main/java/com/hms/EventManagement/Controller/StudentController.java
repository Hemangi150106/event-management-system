package com.hms.EventManagement.Controller;


import com.hms.EventManagement.EventRepo.StudentRepo;
import com.hms.EventManagement.Model.Student;
import com.hms.EventManagement.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/student")
public class StudentController {

    @Autowired
    public StudentService studentService;

    @Autowired
    public StudentRepo studentRepo;

    @PostMapping("/insert")
    public Student insertStudent(@RequestBody Student student){
        return studentService.insertStudent(student);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginStudent(@RequestBody Student student) {

        try {
            Student loggedInStudent = studentService.loginStudent(
                    student.getEmail(),
                    student.getPassword()
            );
            return ResponseEntity.ok(loggedInStudent);
        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(e.getMessage());
        }
    }

}
