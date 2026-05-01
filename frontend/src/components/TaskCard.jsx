import API from "../api/axios";

const TaskCard = ({ task, refreshTasks }) => {
  const handleStatusChange = async (e) => {
    try {
      await API.put(`/tasks/${task._id}`, {
        status: e.target.value,
      });

      refreshTasks();
    } catch (error) {
      alert(error.response?.data?.message || "Status update failed");
    }
  };

  const isOverdue =
    new Date(task.dueDate) < new Date() && task.status !== "Completed";

  const priorityClass =
    task.priority === "High"
      ? "priority-high"
      : task.priority === "Medium"
      ? "priority-medium"
      : "priority-low";

  const statusClass =
    task.status === "Completed"
      ? "status-completed"
      : task.status === "In Progress"
      ? "status-progress"
      : "status-pending";

  return (
    <div className={`task-card ${isOverdue ? "overdue-border" : ""}`}>
      <h3>{task.title}</h3>

      <p>{task.description || "No description added."}</p>

      <p>
        <b>Project:</b> {task.project?.name || "N/A"}
      </p>

      <p>
        <b>Assigned To:</b> {task.assignedTo?.name || "N/A"}
      </p>

      <p>
        <b>Priority:</b>{" "}
        <span className={priorityClass}>{task.priority}</span>
      </p>

      <p>
        <b>Due Date:</b> {new Date(task.dueDate).toLocaleDateString()}
      </p>

      <p>
        <b>Status:</b>{" "}
        <span className={statusClass}>{task.status}</span>
      </p>

      <select value={task.status} onChange={handleStatusChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      {isOverdue && <p className="error">⚠ Overdue Task</p>}
    </div>
  );
};

export default TaskCard;