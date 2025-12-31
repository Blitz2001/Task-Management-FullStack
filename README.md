# Task Management System (Full-Stack)

A professional task management application developed as a university IT project. This application features a .NET Web API backend and an Angular frontend, with persistent storage in MSSQL.

## 🚀 Project Requirements Met

*   **Backend CRUD**: Full RESTful API implementation for creating, reading, updating, and deleting tasks.
*   **Database**: Persistent storage integrated with MSSQL/SQL Express.
*   **Side-by-Side UI**: Dashboard layout allowing simultaneous viewing of the task list and the management form.
*   **Authentication**: Simple username/password security gate.
*   **Filtering & Sorting**: Real-time search by title, status-based tabs (Pending/Completed), and automatic sorting by due date.

## 🛠️ Setup Instructions

### 1. Database Configuration
1.  Open **SQL Server Management Studio (SSMS)**.
2.  Create a database named `TaskManagerDB`.
3.  Run the included `database_setup.sql` script to recreate the schema and sample data.

### 2. Backend Setup (.NET Web API)
1.  Navigate to the `/backend` folder.
2.  Update the `ConnectionStrings` in `appsettings.json` to match your local SQL Server instance.
3.  Run the following command:
    ```bash
    dotnet run
    ```

### 3. Frontend Setup (Angular)
1.  Navigate to the `/frontend` folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Launch the application:
    ```bash
    ng serve
    ```
4.  Access the application at [http://localhost:4200](http://localhost:4200).

## 🔐 Credentials

Access the dashboard using these simple credentials:

*   **Username**: `admin`
*   **Password**: `password`

## ✨ Features

*   **Real-time Statistics**: Live counters for Pending and Completed tasks.
*   **Interactive Dashboard**: Responsive task cards with checkbox status toggling.
*   **User Feedback**: Integrated toast notification system for all database actions.
*   **Filtering & Sorting**: Real-time search by title and status-based tabs.
