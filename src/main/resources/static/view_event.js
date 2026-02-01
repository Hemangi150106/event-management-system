document.addEventListener("DOMContentLoaded", function () {
    

    fetch("http://localhost:8090/event/getAll")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch events");
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Check what API returns
            displayEvents(data);
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Unable to load events");
        });
});

function displayEvents(events) {
    const tableBody = document.getElementById("eventTableBody");
    tableBody.innerHTML = "";

    if (!events || events.length === 0) {
        tableBody.innerHTML = "<tr><td colspan='4'>No events found</td></tr>";
        return;
    }

    events.forEach(event => {
        const row = `
            <tr>
                <td>${event.eventId}</td>
                <td>${event.eventname}</td>
                <td>${event.date}</td>
                <td>${event.description || ""}</td>
                <td>
                   <button class="btn btn-sm btn-warning update-btn" data-id="${event.eventId}">Update</button>
                   <button class="btn btn-sm btn-danger delete-btn" data-id="${event.eventId}">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

}

document.addEventListener("click", function(e) {
    // UPDATE button
    if (e.target.classList.contains("update-btn")) {
        const eventId = e.target.dataset.id;
        // Redirect to update page with query param
        window.location.href = `updateEvent.html?id=${eventId}`;
    }

    // DELETE button 
    if (e.target.classList.contains("delete-btn")) {

        const eventId = e.target.getAttribute("data-id");

        if (!confirm("Are you sure you want to delete this event?")) return;

        fetch(`http://localhost:8090/event/delete/${eventId}`, {
            method: "DELETE"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to delete");
            }
            return response.text();
        })
        .then(() => {
            alert("Event deleted successfully ✅");

            // remove row without reloading
            e.target.closest("tr").remove();
        })
        .catch(error => {
            console.error("Delete error:", error);
            alert("Delete failed ❌");
        });
    }
});










