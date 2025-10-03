const getAllProducts = (req, res) => {
  res.send("Fetches all products");
};

const addProduct = (req, res) => {
  res.send("Add a new Product");
};

const getProductById = (req, res) => {
  res.send(`Fetching product with id  : ${req.params.id}`);
};

module.exports = {
  getAllProducts,
  addProduct,
  getProductById,
};
