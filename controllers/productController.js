const productServices = require("../services/productService");
const path = require("path");
const getAllProducts = (req, res) => {
  let response = productServices.getProducts();
  res.sendFile(response);
};

const addProduct = (req, res) => {
  let response = productServices.addNewProduct();
  res.send(response);
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
