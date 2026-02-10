# My Vite App - Frontend

React + Vite frontend for the MERN Stack Authentication & Task Management application.

## Features

- **User Authentication** - Register, Login with JWT tokens
- **Protected Routes** - Dashboard and Profile pages require authentication
- **Task Management** - Create, view, search, and delete tasks
- **Real-time Search** - Debounced search with 300ms delay
- **Responsive UI** - Built with Tailwind CSS

## Tech Stack

- React 18
- Vite (Fast build tool)
- React Router DOM (Routing)
- Axios (HTTP client)
- Tailwind CSS (Styling)

## Setup

```bash
npm install
npm run dev
```

Frontend runs on `http://localhost:5174` (or next available port)

## Project Structure

```
src/
├── pages/
│   ├── Login.jsx          # Login page
│   ├── Register.jsx       # Registration page
│   ├── Dashboard.jsx      # Task management (main page)
│   └── Profile.jsx        # User profile
├── components/
│   └── Navbar.jsx         # Navigation bar
├── services/
│   └── api.js            # Axios API client with JWT interceptor
├── App.jsx               # Main app with routing
└── main.jsx              # Entry point
```

## Key Components

### App.jsx
- BrowserRouter setup with protected routes
- PrivateRoute component that checks localStorage for user token
- Routes: /login, /register, /dashboard, /profile

### Login.jsx
- Email & password input
- Saves user token to localStorage
- Redirects to dashboard on success

### Register.jsx
- Name, email, password input
- Creates new user account
- Saves token and redirects to dashboard

### Dashboard.jsx
- Add new tasks
- Search tasks with debouncing
- Display filtered tasks
- Delete tasks

### api.js (Services)
- Axios instance with baseURL
- JWT interceptor automatically adds token to requests
- Reads token from localStorage

## How It Works

1. **Authentication Flow**
   - User registers/logs in
   - Token received from backend
   - Token stored in localStorage
   - API service auto-attaches token to all requests

2. **Protected Routes**
   - PrivateRoute checks if user exists in localStorage
   - If no user → redirects to /login
   - If user exists → allows access to protected pages

3. **Search with Debouncing**
   - User types in search box
   - Debounce delay of 300ms
   - After delay, tasks are filtered
   - Reduces unnecessary re-renders

## Build for Production

```bash
npm run build
npm run preview
```

## License

MIT
