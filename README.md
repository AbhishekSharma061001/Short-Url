# 📌 Short-URL Project

A simple and secure URL shortening service built with **Node.js**, **Express**, **MongoDB**, and **JWT-based authentication/authorization**.  
Users can register, log in, and create shortened links that redirect to the original URLs.

---

## 🚀 Features
- 🔑 **User Authentication** – Signup/Login with JWT  
- 🔒 **Authorization** – Only logged-in users can create/manage URLs  
- 🔗 **URL Shortening** – Generate unique short codes for long URLs  
- 📈 **Click Tracking** – Track number of times a short link was used  
- 🗑 **URL Management** – Users can delete their own short URLs  
- ⚡ **REST API Design** – JSON responses, easy integration  

---

## 🛠 Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (Mongoose)  
- **Authentication**: JWT (JSON Web Token)  

---

## 📂 Project Structure
short-url/
│── models/ # Mongoose schemas (User, URL)
│── routes/ # API routes (auth, url)
│── middlewares/ # Auth middleware (JWT verification)
│── controllers/ # Business logic for each route
│── server.js # App entry point
│── package.json
│── .gitignore
│── README.md

---

## 🔧 Installation & Setup

### 1. Clone the repository
```
git clone https://github.com/your-username/short-url.git
cd short-url
```
2. Install dependencies
```
Copy code
npm install
```
3. Create .env file
```
env
Copy code
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
5. Run the server
```
Copy code
npm start
or (if using nodemon):
```

---

👨‍💻 Author

Developed by Abhishek Sharma ✨

Copy code
npm run dev
