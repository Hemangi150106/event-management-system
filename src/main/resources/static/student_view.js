document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:8090/event/getAll")
        .then(res => res.json())
        .then(data => displayEvents(data))
        .catch(err => console.error(err));
});

function displayEvents(events) {
    const tableBody = document.getElementById("eventTableBody");
    tableBody.innerHTML = "";

    events.forEach(event => {
        const row = `
            <tr>
                <td>${event.eventId}</td>
                <td>${event.eventname}</td>
                <td>${event.date}</td>
                <td>${event.description || ""}</td>
                <td><a href="registration.html" class="btn btn-primary">Register</></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


