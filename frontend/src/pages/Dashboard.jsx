import { useEffect, useState } from "react";
import API from "../api/axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    pendingTasks: 0,
    inProgressTasks: 0,
    completedTasks: 0,
    overdueTasks: 0,
  });

  const fetchStats = async () => {
    try {
      const res = await API.get("/dashboard");
      setStats(res.data);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="page">
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{stats.totalTasks}</p>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <p>{stats.pendingTasks}</p>
        </div>

        <div className="stat-card">
          <h3>In Progress</h3>
          <p>{stats.inProgressTasks}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>{stats.completedTasks}</p>
        </div>

        <div className="stat-card overdue">
          <h3>Overdue</h3>
          <p>{stats.overdueTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;