package com.hms.EventManagement.Controller;


import com.hms.EventManagement.Model.EventManagement;
import com.hms.EventManagement.Service.EventManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/event")
public class EventManagementController {

    @Autowired
    public EventManagementService eventManagementService;


    @PostMapping("/insert")
    public EventManagement addEvent(@RequestBody EventManagement event){
        return eventManagementService.addEvent(event);
    }



    @GetMapping("/getAll")
    public List<EventManagement> getAllEvent(){
        return eventManagementService.getAllevent();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEvent(@PathVariable int id){
         eventManagementService.deleteEvent(id);
    }

    @PutMapping("/update/{id}")
    public EventManagement updateEvent(@PathVariable int id, @RequestBody EventManagement event){
        event.setEventId(id);
        return eventManagementService.updateEvent(event);
    }

}
