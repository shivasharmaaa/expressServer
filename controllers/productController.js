const getProductController = (req, res) => {
  if (req.params.id) {
    res.send(`Fetch a product with id :  ${req.params.id}`);
  } else {
    res.send("Fetch all products");
  }
};

const postProductController = (req, res) => {
  res.send("Add a new Product");
};

module.exports = {
  getProductController,
  postProductController,
};
