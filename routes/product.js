const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.getProductController);

router.post("/", productController.postProductController);

router.get("/:id", productController.getProductController);

module.exports = router;
