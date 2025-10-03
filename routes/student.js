const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("List all students");
});

router.get("/:id", (req, res) => {
  res.send(`Fetch a student by ID ${req.params.id}`);
});

module.exports = router;
