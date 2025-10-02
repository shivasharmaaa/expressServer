const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Here is the list of books");
});

router.post("/", (req, res) => {
  res.status(201).send("book has been added");
});

router.get("/:id", (req, res) => {
  res.status(201).send(`${req.params.id}`);
});

module.exports = router;
