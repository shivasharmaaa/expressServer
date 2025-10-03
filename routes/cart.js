const express = require("express");

const router = express.Router();

router.get("/:userId", (req, res) => {
  res.send(`Fetch the cart items for user with id :  ${req.params.userId}`);
});

router.post("/:userId", (req, res) => {
  res.send(
    `Add a new product to the users cart with id : ${req.params.userId}`
  );
});

module.exports = router;
