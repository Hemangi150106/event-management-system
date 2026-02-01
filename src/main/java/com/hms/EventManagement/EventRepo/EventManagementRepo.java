package com.hms.EventManagement.EventRepo;

import com.hms.EventManagement.Model.EventManagement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventManagementRepo extends JpaRepository<EventManagement, Integer> {
}
