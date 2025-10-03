const getAllUsers = (req, res) => {
  res.send("Fetch all users");
};

const addUser = (req, res) => {
  res.send("Addinig a new user");
};

const getUserById = (req, res) => {
  res.send(`Fetches a specific user with id : ${req.params.id}`);
};

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
};
