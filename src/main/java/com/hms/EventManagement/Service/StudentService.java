package com.hms.EventManagement.Service;


import com.hms.EventManagement.EventRepo.StudentRepo;
import com.hms.EventManagement.Model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    @Autowired
    public StudentRepo studentRepo;

    public Student insertStudent(Student student) {
        return studentRepo.save(student);
    }

    public Student loginStudent(String email, String password) {

        Student student = studentRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!student.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }

        return student;
    }
}
