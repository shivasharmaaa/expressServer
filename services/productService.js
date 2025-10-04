const path = require("path");
const getProducts = (obj) => {
  let msg = "fetching all   products";
  return msg;
};

const addNewProduct = (req, res) => {};

const getUserProductById = (req) => {
  let msg = `fethcing a product with id :${req.id}`;
  return msg;
};

module.exports = {
  getProducts,
  addNewProduct,
  getUserProductById,
};
