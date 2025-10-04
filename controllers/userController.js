const {
  sendResponseUsers,
  sendErrorResponse,
} = require("../utils/ErrorHandling");
const getAllUsers = (req, res) => {
  console.log("hello");
  let uId = req.params.id;
  try {
    if (uId) {
      const err = new Error("page not found!");
      err.statusCode = 404;
      throw err;
    }
    let msg = "Fetching all users";
    return sendResponseUsers(res, msg, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const addUser = (req, res) => {
  let uId = req.params.id;
  try {
    if (uId) {
      const err = new Error("page not found!");
      err.statusCode = 404;
      throw err;
    }
    let msg = "Fetching all Users";
    return sendResponseUsers(res, msg, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const getUserById = (req, res) => {
  let uId = req.params.id;
  try {
    if (!uId) {
      const err = new Error("page not found!");
      err.statusCode = 404;
      throw err;
    }
    let msg = "Fetching all Users";
    return sendResponseUsers(res, uId, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
};
