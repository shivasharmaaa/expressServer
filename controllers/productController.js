const productServices = require("../services/productService");
const path = require("path");
const {
  sendResponseProduct,
  sendErrorResponse,
} = require("../utils/ErrorHandling");
const getAllProducts = (req, res) => {
  let uId = req.params.id;
  try {
    if (uId) {
      const err = new Error("page not found!");
      err.statusCode = 404;
      throw err;
    }
    let msg = "Fetching all products";
    return sendResponseProduct(res, msg, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const addProduct = (req, res) => {
  let uId = req.params.id;
  try {
    if (uId) {
      const err = new Error("page not found!");
      err.statusCode = 201;
      throw err;
    }
    let msg = "Added a new  product";
    return sendResponseProduct(res, msg, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

const getProductById = (req, res) => {
  let uId = req.params.id;
  try {
    if (!uId) {
      const err = new Error("page not found!");
      err.statusCode = 404;
      throw err;
    }
    let msg = "Fetching all products";
    return sendResponseProduct(res, uId, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
};
