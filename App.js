const express = require("express");
const homeRouter = require("./routes/home");
const studentRouter = require("./routes/student");
const courseRouter = require("./routes/course");
const app = express();

app.use(express.json());

app.use("/", homeRouter);
app.use("/students", studentRouter);
app.use("/courses", courseRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});
app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
