# 🗂️ Task Management System (Full-Stack)

A professional **full-stack Task Management application** built with a **.NET 8 Web API backend** and an **Angular 18+ frontend**, using **Microsoft SQL Server** for persistent storage.

This project demonstrates clean architecture, RESTful API design, and a modern SPA frontend. It fulfills all core requirements including **CRUD operations**, **search & filtering**, **side-by-side task views**, and **basic authentication**.

---

## 🚀 Tech Stack

### Backend
- **.NET 8 Web API**
- Entity Framework Core
- RESTful API architecture

### Frontend
- **Angular 18+**
- Standalone Components
- Modern CSS (Flexbox)

### Database
- **Microsoft SQL Server / SQL Express**

---

## ✨ Features

- ✅ **Full CRUD Operations** for tasks  
- 📊 **Real-Time Statistics**  
  - Live counters for **Pending** and **Completed** tasks  
- 🧩 **Interactive Dashboard**  
  - Responsive task cards  
  - Checkbox-based status toggling  
- 🔍 **Filtering & Sorting**  
  - Real-time search by task title  
  - Status-based tabs (Pending / Completed)  
- 🔔 **User Feedback**  
  - Toast notifications for all database actions  
- 🔐 **Simple Authentication System**  

---

## 🛠️ Setup Instructions

### 1️⃣ Database Configuration

1. Open **SQL Server Management Studio (SSMS)**  
2. Create a database named:

   ```sql
   TaskManagerDB

Run the provided database_setup.sql script to create the schema and insert sample data.

###2️⃣ Backend Setup (.NET Web API)

Navigate to the backend folder:

cd backend


Update the ConnectionStrings section in appsettings.json to match your local SQL Server instance.

Run the API:

dotnet run


The backend will start on the configured localhost port.

3️⃣ Frontend Setup (Angular)

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Start the Angular development server:

ng serve


Open your browser and go to:

http://localhost:4200

🔐 Login Credentials

Use the following credentials to access the dashboard:

Username: admin
Password: password

📂 Project Structure
Task-Management-System/
│
├── backend/        # .NET 8 Web API
│   ├── Controllers
│   ├── Models
│   ├── Data
│   └── appsettings.json
│
├── frontend/       # Angular 18+ application
│   ├── src/
│   ├── components/
│   └── services/
│
└── database_setup.sql
