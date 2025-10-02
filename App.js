const express = require("express");
const booksrouter = require("./routes/books");
const app = express();

app.use(express.json());

app.use("/books", booksrouter);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
