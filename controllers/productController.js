const productServices = require("../services/productService");
const path = require("path");
const getAllProducts = (req, res) => {
  let filePath = path.join(__dirname, "..", "views", "product.html");
  res.sendFile(filePath);
};

const addProduct = (req, res) => {
  const obj = req.body;
  res.json({ value: obj.productName });
};

const getProductById = (req, res) => {
  let response = productServices.getUserProductById(req.params);
  res.send(response);
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
};
