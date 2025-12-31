Task Management System (Full-Stack)
A basic task management application built with a .NET Web API backend and an Angular frontend. This project satisfies all core requirements, including CRUD operations, side-by-side views, search/filtering, and a simple authentication mechanism.

🚀 Tech Stack
Backend: .NET 8 Web API

Frontend: Angular 18+ (Standalone Components)

Database: MSSQL / SQL Express

Styling: Modern CSS with Flexbox for side-by-side layout

🛠️ Installation & Setup
1. Database Setup
Open SQL Server Management Studio (SSMS).

Create a new database named TaskManagerDB.

Open and run the database_setup.sql script included in this repository to create the tables and seed initial data.

2. Backend Setup (.NET API)
Navigate to the /backend folder.

Open appsettings.json and ensure the ConnectionStrings matches your local SQL Server instance.

Run the following command:

Bash

dotnet run
The API will be available at https://localhost:7121 (or your configured port).

3. Frontend Setup (Angular)
Navigate to the /frontend folder.

Install dependencies:

Bash

npm install
Start the development server:

Bash

ng serve
Open your browser to http://localhost:4200.

🔐 Authentication
This application implements a simple username/password mechanism as required:

Username: admin

Password: password

✨ Features
CRUD Operations: Create, Read, Update, and Delete tasks with persistent storage.

Dashboard View: Side-by-side layout showing the task list and the add/edit form simultaneously.

Search & Filter: Real-time search by title and tabs to switch between "Pending" and "Completed" tasks.

Statistics: Live counters for pending and completed tasks.

Notifications: Toast notification system for user feedback on all actions.
