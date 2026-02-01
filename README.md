📌 Event Management System

The Event Management System is a web-based application developed to manage events efficiently.
It provides separate authentication for Admin and Student, allowing controlled access to event-related operations.

🚀 Features

👨‍💼 Admin Module

● Admin login authentication
● Add new events
● View all events
● Update event details
● Delete events
● Manage event data stored in MySQL

👩‍🎓 Student Module

● Student login authentication
● View available events
● Register for events
● Access only permitted functionalities

🛠️ Tech Stack

● Frontend
- HTML
- Bootstrap (for UI & responsiveness)
- JavaScript

● Backend
- Spring Boot
- Java

● Database
- MySQL Server

● Build & Tools
- Maven
- Git & GitHub
- IntelliJ IDEA

📂 Project Structure
EventManagement
│── src
│   └── main
│       ├── java
│       │   └── com.hms.EventManagement
│       └── resources
│           ├── static
│           │   ├── images
│           │   ├── js
│           │   └── *.html
│           └── templates
│               └── (empty)
│
│── pom.xml
│── .gitignore
│── README.md

📌 Note:
All HTML, JavaScript, and image files are placed inside the static folder.
The templates folder is currently empty.

🔐 Authentication

● Separate login for Admin and Student
● Role-based access control
● Admin has full event management privileges
● Students have limited access (view & register)

⚙️ Setup Instructions

1️⃣ Clone the repository
git clone https://github.com/Hemangi150106/event-management-system.git

2️⃣ Open the project
Open IntelliJ IDEA
Select Open → EventManagement folder

3️⃣ Configure MySQL

Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/eventdb
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

4️⃣ Run the application
mvn spring-boot:run

🌐 Access Application
http://localhost:8080

🖼️ Static Resources Usage
Images are stored in:
src/main/resources/static/images/

📌 Future Enhancements

● Email notification for event registration
● Admin dashboard with analytics
● Event registration history for students
● Improved UI using advanced Bootstrap components
● Deployment on cloud platforms

👩‍💻 Author
Hemangi Sherikar
Computer Engineering Student
