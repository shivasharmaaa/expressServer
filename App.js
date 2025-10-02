const express = require("express");

const app = express();

app.use(express.json());

app.get("/welcome/:username", (req, res, next) => {
  const name = req.params.username;
  const role = req.query.role;
  res.send(`welcome  ${name} your role is ${role}`);
});

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
