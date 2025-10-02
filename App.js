const express = require("express");
const orderRouter = require("./routes/order");
const productRouter = require("./routes/product");
const app = express();

app.use(express.json());

app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
