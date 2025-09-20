📌 Short-URL Project

A simple and secure URL shortening service built with Node.js, Express, MongoDB, and JWT-based authentication/authorization.
Users can register, log in, and create shortened links that redirect to the original URLs.

🚀 Features

🔑 User Authentication (Signup/Login with JWT)

🔒 Authorization (Only logged-in users can create/manage URLs)

🔗 URL Shortening (Generate unique short codes for long URLs)

📈 Click Tracking (Track number of times a short link was used)

🗑 URL Management (Users can delete their own short URLs)

⚡ REST API Design (JSON responses, easy integration)

🛠 Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Authentication: JWT (JSON Web Token)

📂 Project Structure
short-url/
│── models/          # Mongoose schemas (User, URL)
│── routes/          # API routes (auth, url)
│── middlewares/     # Auth middleware (JWT verification)
│── controllers/     # Business logic for each route
│── server.js        # App entry point
│── package.json
│── .gitignore
│── README.md

🔧 Installation & Setup

Clone the repository

git clone https://github.com/your-username/short-url.git
cd short-url


Install dependencies

npm install


Create .env file

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Run the server

npm start


or (if using nodemon):

npm run dev

📌 API Endpoints
🔑 Authentication

POST /signup → Register new user

POST /login → Login and get JWT

🔗 URL Shortening

POST /url → Create a new short URL (requires JWT)

GET /analytics/:id → Get all URLs created by logged-in user

🛡 Authentication & Authorization

Authentication: Users must log in with email/password.

Authorization: Only authenticated users can create, view, or delete their own short URLs.

JWT is stored client-side and sent in headers:

Authorization: Bearer <your_token>

📊 Example Request

Shorten URL

POST /url/shorten
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
  "longUrl": "https://example.com/my-very-long-url"
}


Response

{
  "shortUrl": "http://localhost:5000/abc123",
  "longUrl": "https://example.com/my-very-long-url",
  "clicks": 0
}

👨‍💻 Author

Developed by Abhishek Sharma ✨
