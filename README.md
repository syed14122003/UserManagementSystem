# User Management System

A simple and lightweight User Management System built using *Node.js* and *Express.js, with **node-persist* for persistent key-value storage.

---

## 🚀 Features

- Create, read, update, and delete users (CRUD)
- Fetch individual user details by ID
- User login functionality
- Lightweight local storage using node-persist
- Modular route and controller structure

---

## 📁 Project Structure

UserManagementSystem/
├── .node-persist/           # node-persist storage files (auto-generated)
│
├── controllers/
│   └── userController.js    # Logic for user operations (CRUD, login)
│
├── node_modules/            # Project dependencies (auto-generated)
│
├── routes/
│   └── userRoutes.js        # Defines RESTful API endpoints
│
├── app.js                   # Main entry point – initializes Express and routes
├── package.json             # Project config and dependencies
├── package-lock.json        # Dependency lock file
└── README.md                # Project documentation (this file)

---

---

## 🛠 Tech Stack

- *Backend:* Node.js, Express.js
- *Storage:* [node-persist](https://www.npmjs.com/package/node-persist) (key-value local storage)
- *Security:* bcrypt (for password hashing)
- *Tools:* CORS, body-parser, nodemon

---

## 📦 Installation

1. *Clone the repository:*
   ```bash
   git clone git@github.com:syed14122003/UserManagementSystem.git
