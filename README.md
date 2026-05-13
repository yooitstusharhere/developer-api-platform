# 🚀 Developer API Platform

A production-style backend platform for developers featuring secure authentication, API key management, analytics, rate limiting, and API documentation.

## ✨ Features

- 🔐 JWT Authentication
- 👤 Role-Based Access Control (Admin/User)
- 🗝️ API Key Generation & Regeneration
- 📊 API Usage Analytics
- 🚦 Rate Limiting
- 📄 Swagger API Documentation
- 🛡️ Protected Routes
- ☁️ MongoDB Atlas Database

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication & Security
- JWT (JSON Web Token)
- bcrypt.js
- Express Rate Limit

### Documentation
- Swagger UI
- Swagger JSDoc

---

## 📂 Project Structure

```bash
developer-api-platform/
│── config/
│── controllers/
│── middleware/
│── models/
│── routes/
│── .gitignore
│── package.json
│── server.js
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |

### API Key Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/keys/generate` | Generate API key |
| PATCH | `/api/keys/regenerate` | Regenerate API key |
| GET | `/api/keys/stats` | Get API usage stats |

### Admin

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/dashboard` | Admin dashboard |
| GET | `/api/admin/analytics` | Platform analytics |

---

## 📘 API Documentation

Swagger Docs:

```bash
http://localhost:5000/api-docs
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yooitstusharhere/developer-api-platform.git
```

Move into project folder:

```bash
cd developer-api-platform
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
PORT=5000
```

Run server:

```bash
npm run dev
```

---

## 📈 Future Improvements

- Subscription Plans (Free/Premium)
- API Request Logs
- Redis Caching
- Deployment Dashboard

---

## 👨‍💻 Author

**Tushar**

GitHub:  
https://github.com/yooitstusharhere