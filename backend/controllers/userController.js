const User = require("../models/User");

exports.getMembers = async (req, res) => {
  try {
    const members = await User.find({ role: "Member" }).select("-password");

    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};