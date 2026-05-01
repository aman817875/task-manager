import { useEffect, useState } from "react";
import API from "../api/axios";
import TaskCard from "../components/TaskCard";

const Tasks = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [members, setMembers] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    project: "",
    assignedTo: "",
    priority: "Medium",
    dueDate: "",
  });

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  const fetchMembers = async () => {
    try {
      const res = await API.get("/users/members");
      setMembers(res.data);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchProjects();

    if (user?.role === "Admin") {
      fetchMembers();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.project || !formData.assignedTo || !formData.dueDate) {
      alert("Please fill title, project, assigned member, and due date");
      return;
    }

    try {
      await API.post("/tasks", formData);

      setFormData({
        title: "",
        description: "",
        project: "",
        assignedTo: "",
        priority: "Medium",
        dueDate: "",
      });

      fetchTasks();
      alert("Task created successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Task creation failed");
    }
  };

  return (
    <div className="page">
      <h1>Tasks</h1>

      {user?.role === "Admin" && (
        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Create Task</h2>

          <input
            type="text"
            placeholder="Task title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <textarea
            placeholder="Task description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <select
            value={formData.project}
            onChange={(e) =>
              setFormData({ ...formData, project: e.target.value })
            }
          >
            <option value="">Select Project</option>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.name}
              </option>
            ))}
          </select>

          <select
            value={formData.assignedTo}
            onChange={(e) =>
              setFormData({ ...formData, assignedTo: e.target.value })
            }
          >
            <option value="">Select Member</option>
            {members.map((member) => (
              <option key={member._id} value={member._id}>
                {member.name} - {member.email}
              </option>
            ))}
          </select>

          <select
            value={formData.priority}
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value })
            }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

          <input
            type="date"
            value={formData.dueDate}
            onChange={(e) =>
              setFormData({ ...formData, dueDate: e.target.value })
            }
          />

          <button type="submit">Create Task</button>
        </form>
      )}

      <div className="list-grid">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} refreshTasks={fetchTasks} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;