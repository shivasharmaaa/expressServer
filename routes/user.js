const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Fetch all users");
});

router.post("/", (req, res) => {
  res.send("Add a new user");
});

router.get("/:id", (req, res) => {
  res.send(`Fetch a user with id : ${req.params.id}`);
});

module.exports = router;
