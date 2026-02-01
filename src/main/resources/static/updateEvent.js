document.getElementById("updateEventForm").addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const eventId = document.getElementById("eventId").value;

    const updatedEvent = {
        eventId: document.getElementById("eventId").value,
        eventname: document.getElementById("eventname").value,
        date: document.getElementById("date").value,
        description: document.getElementById("description").value
    };

    fetch(`http://localhost:8090/event/update/${eventId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEvent)
    })
    .then(res => {
        if (!res.ok) throw new Error("Update failed");
        return res.json();
    })
    .then(() => {
        alert("Event updated successfully ✅");
        window.location.href = "view_event.html";
    })
    .catch(err => {
        console.error(err);
        alert("Update failed ❌");
    });
});
