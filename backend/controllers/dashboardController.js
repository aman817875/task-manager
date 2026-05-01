// backend/controllers/dashboardController.js
const Task = require("../models/Task");

exports.getDashboardStats = async (req, res) => {
  try {
    const filter = req.user.role === "Admin" ? {} : { assignedTo: req.user._id };

    const totalTasks = await Task.countDocuments(filter);
    const pendingTasks = await Task.countDocuments({ ...filter, status: "Pending" });
    const inProgressTasks = await Task.countDocuments({ ...filter, status: "In Progress" });
    const completedTasks = await Task.countDocuments({ ...filter, status: "Completed" });

    const overdueTasks = await Task.countDocuments({
      ...filter,
      dueDate: { $lt: new Date() },
      status: { $ne: "Completed" }
    });

    res.json({
      totalTasks,
      pendingTasks,
      inProgressTasks,
      completedTasks,
      overdueTasks
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};