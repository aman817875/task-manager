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

