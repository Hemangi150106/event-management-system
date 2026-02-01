package com.hms.EventManagement.Model;


import jakarta.persistence.*;

import java.time.LocalDate;

@Table
@Entity
public class EventManagement {
    @Id
    private int eventId;
    private String eventname;
    private LocalDate date;
    private String description;

    public EventManagement(){
    }

    @Override
    public String toString() {
        return "EventManagement{" +
                "eventId=" + eventId +
                ", eventname='" + eventname + '\'' +
                ", date=" + date +
                ", description='" + description + '\'' +
                '}';
    }

    public EventManagement(int eventId, String eventname, LocalDate date, String description) {
        this.eventId = eventId;
        this.eventname = eventname;
        this.date = date;
        this.description = description;
    }

    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public String getEventname() {
        return eventname;
    }

    public void setEventname(String eventname) {
        this.eventname = eventname;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
