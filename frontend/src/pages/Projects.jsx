import { useEffect, useState } from "react";
import API from "../api/axios";

const Projects = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    members: [],
  });

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/projects", formData);
      setFormData({ name: "", description: "", members: [] });
      fetchProjects();
    } catch (error) {
      alert(error.response?.data?.message || "Project creation failed");
    }
  };

  return (
    <div className="page">
      <h1>Projects</h1>

      {user?.role === "Admin" && (
        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Create Project</h2>

          <input
            type="text"
            placeholder="Project name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <textarea
            placeholder="Project description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <button type="submit">Create Project</button>
        </form>
      )}

      <div className="list-grid">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <b>Members:</b> {project.members?.length || 0}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;