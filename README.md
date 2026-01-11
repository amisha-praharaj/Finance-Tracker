💰 Personal Finance Tracker

A full-stack Personal Finance Tracker application built using the MERN stack that helps users manage their income, expenses, budgets, and overall financial health in one place.

🚀 Features

🔐 User Registration & Authentication

Secure signup and login using JWT-based authentication

💸 Expense Tracking

Add, view, and manage daily expenses

💰 Income Management

Track multiple income sources

🎯 Budget Setting & Tracking

Set category-wise budgets and monitor usage

📜 Transaction History

View all past income and expense transactions

📊 Financial Overview

Net balance, savings, and spending insights

🛠️ Tech Stack

Frontend

React.js

Javascript

HTML

Tailwind CSS

Axios

Backend

Node.js

Express.js

JWT Authentication

Database

MongoDB (Mongoose)

📁 Project Structure
Personal-Finance-Tracker/
│
├── client/        # React + TailwindCSS frontend
├── server/        # Node.js + Express backend
├── README.md

⚙️ Environment Variables (Backend)

Create a .env file inside the server folder and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000


⚠️ Note:
Do NOT commit the .env file to GitHub. Add it to .gitignore.

🧪 Installation & Setup
-> Clone the repository
git clone https://github.com/your-username/Personal-Finance-Tracker.git
cd Personal-Finance-Tracker

-> Backend Setup
cd server
npm install
npm start

-> Frontend Setup
cd client
npm install
npm run dev

-> Open in Browser
http://localhost:5173

🔐 Authentication Flow

JWT token stored in localStorage

Protected routes secured via middleware

User-specific data isolation

📌 Future Enhancements

📈 Advanced analytics & charts

📱 Mobile responsiveness improvements


👩‍💻 Author

Amisha Praharaj
MERN Stack Developer
