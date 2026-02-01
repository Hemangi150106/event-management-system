package com.hms.EventManagement.EventRepo;

import com.hms.EventManagement.Model.Admin;
import com.hms.EventManagement.Model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student, String> {
     Optional<Student> findByEmail(String email);




}
