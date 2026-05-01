# Team Task Manager

Team Task Manager is a full-stack web application for managing projects, assigning tasks to team members, and tracking task progress. It includes authentication, role-based access control, project management, task management, and a dashboard.

## Live Demo

Frontend: https://task-manager-ro7xiq4ow-aman817875s-projects.vercel.app/login

Backend: https://team-task-manager-production-8441.up.railway.app

## Features

- User signup and login
- JWT-based authentication
- Role-based access control for Admin and Member
- Project creation and project listing
- Task creation and assignment
- Member dropdown for task assignment
- Task status tracking
- Dashboard with task statistics
- Overdue task tracking

## Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS

### Database

- MongoDB Atlas

### Deployment

- Frontend deployed on Vercel
- Backend deployed on Railway

## Roles

### Admin

Admin can:

- Create projects
- View projects
- Create tasks
- Assign tasks to members
- View all tasks
- Update task status
- View dashboard statistics

### Member

Member can:

- View assigned tasks
- Update task status
- Track task progress

## Folder Structure

```text
team-task-manager
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vercel.json
│   └── package.json
│
├── .gitignore
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <your-repository-link>
cd Team-Task-Manager
```

## Backend Setup

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

## Frontend Setup

Open a new terminal and go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `frontend` folder if needed:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |

### Projects

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/projects` | Create project |
| GET | `/api/projects` | Get projects |
| GET | `/api/projects/:id` | Get project by ID |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |

### Tasks

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks` | Get tasks |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

### Dashboard

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/dashboard` | Get dashboard statistics |

### Users

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/users/members` | Get all members |

## Environment Variables

### Backend

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Frontend

Create a `.env` file inside the `frontend` folder if needed:

```env
VITE_API_URL=your_backend_api_url
```

For deployed frontend, the backend API URL format is:

```env
VITE_API_URL=https://your-backend-url/api
```

## Deployment

### Backend Deployment

The backend is deployed on Railway.

Required Railway environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Railway automatically provides the `PORT`, so it is not required to add `PORT` manually in Railway variables.

### Frontend Deployment

The frontend is deployed on Vercel.

Required Vercel environment variable:

```env
VITE_API_URL=https://your-backend-url/api
```

Vercel settings:

```text
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

For React Router support on Vercel, `frontend/vercel.json` is used:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Important Notes

- Keep `.env` files private.
- Do not push `node_modules` to GitHub.
- Do not expose MongoDB connection strings or JWT secrets.
- Use an Admin account to create projects and assign tasks.
- Use a Member account to view and update assigned tasks.

## Author

Aman Singh
