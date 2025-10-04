const express = require("express");
const homeRouter = require("./routes/home");
const cartRouter = require("./routes/cart");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/", homeRouter);
app.use("/api/products", productRouter);

app.use((req, res) => {
  res.status(404).send("Page not found");
});
app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
