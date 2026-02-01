package com.hms.EventManagement.Service;


import com.hms.EventManagement.EventRepo.EventManagementRepo;
import com.hms.EventManagement.Model.EventManagement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventManagementService {

    @Autowired
    public EventManagementRepo eventManagementRepo;

    public EventManagement addEvent(EventManagement event) {
        return eventManagementRepo.save(event);
    }

    public List<EventManagement> getAllevent() {
        return eventManagementRepo.findAll();
    }


    public void deleteEvent(int id) {
        eventManagementRepo.deleteById(id);
    }


    public EventManagement updateEvent(EventManagement event) {
        return eventManagementRepo.save(event);
    }



}
