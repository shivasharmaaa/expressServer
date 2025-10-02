const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`method is ${req.method} and url is ${req.url}`);
  next();
});

app.get("/products", (req, res) => {
  res.send("Here is the list of all products");
});

app.post("/products", (req, res) => {
  res.send("A new product has been added");
});

app.get("/categories", (req, res) => {
  res.send("Here is the list of all categories");
});

app.post("/categories", (req, res) => {
  res.send("A new category has been created");
});

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
