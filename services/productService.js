const path = require("path");
const getProducts = () => {
  let filePath = path.join(__dirname, "..", "views", "product.html");
  return filePath;
};

const addNewProduct = (req, res) => {
  let msg = "Added a  new product";
  return msg;
};

const getUserProductById = (req) => {
  let msg = `fethcing a product with id :${req.id}`;
  return msg;
};

module.exports = {
  getProducts,
  addNewProduct,
  getUserProductById,
};
