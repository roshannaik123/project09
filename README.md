# Project09 - MERN Stack Auth & Task Management

A full-stack authentication and task management application built with MERN stack (MongoDB, Express, React, Node.js).

## Project Structure

```
project09/
├── my-vite-app/          # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/        # Auth pages (Login, Register, Dashboard, Profile)
│   │   ├── services/     # API service with Axios
│   │   ├── components/   # Reusable components
│   │   └── App.jsx       # Main app with routing
│   ├── package.json
│   └── vite.config.js
│
├── server/               # Backend (Node.js + Express)
│   ├── config/           # Database configuration
│   ├── controllers/      # Business logic (Auth, Tasks)
│   ├── middleware/       # Auth middleware (JWT)
│   ├── models/           # MongoDB schemas (User)
│   ├── routes/           # API routes
│   ├── server.js         # Express server entry point
│   ├── .env              # Environment variables
│   └── package.json
│
└── README.md             # This file
```

## Features

✅ User Authentication
- Register new user
- Login with email & password
- JWT token-based authentication
- Protected routes with middleware

✅ Task Management
- Create tasks
- View all tasks
- Search & filter tasks (with debouncing)
- Delete tasks

✅ User Profile
- View authenticated user profile

## Tech Stack

**Frontend:**
- React 18
- Vite
- React Router DOM
- Axios
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

## Setup & Installation

### Backend Setup

```bash
cd server
npm install
```

Create `.env` file in `server/` folder:
```
PORT=5000
JWT_SECRET=your_secret_key_here
MONGO_URI=mongodb://localhost:27017/authentication_db
```

Start MongoDB (make sure it's running):
```bash
mongod
```

Start the backend server:
```bash
npm start
# or
node server.js
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd my-vite-app
npm install
npm run dev
```

Frontend runs on `http://localhost:5174` (or next available port)

## API Endpoints

### Auth Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (Protected)

### Task Routes
- `POST /api/tasks` - Create task (Protected)
- `GET /api/tasks` - Get all tasks (Protected)
- `PUT /api/tasks/:id` - Update task (Protected)
- `DELETE /api/tasks/:id` - Delete task (Protected)

## Usage

1. **Register**: Navigate to `/register` and create a new account
2. **Login**: Navigate to `/login` with your credentials
3. **Dashboard**: After login, view and manage your tasks
   - Search tasks with debounced search bar
   - Create new tasks
   - Delete tasks
4. **Profile**: View your profile information

## Key Features Explained

### Authentication Flow
1. User registers/logs in
2. Server returns JWT token
3. Token saved to localStorage
4. API service automatically attaches token to requests
5. Protected routes check authentication before rendering

### Search with Debouncing
- Real-time search as you type
- 300ms debounce delay
- Prevents excessive re-renders
- Smooth user experience

### JWT Middleware
- Verifies token on protected routes
- Extracts user info from token
- Attaches user to request object
- Redirects to login if unauthorized

## Development Notes

- CORS is enabled for frontend/backend communication
- All passwords are hashed with bcryptjs
- MongoDB must be running locally
- Frontend redirects unauthenticated users to login

## Future Enhancements

- [ ] Update task functionality
- [ ] Mark tasks as complete/pending
- [ ] Task categories/tags
- [ ] Dark mode
- [ ] Email verification
- [ ] Password reset
- [ ] Pagination for tasks
- [ ] Deployment (Heroku, MongoDB Atlas)

## License

MIT
