const getCartForUser = (req, res) => {
  res.send(`Fetches the cart for a user with id :${req.params.userId} `);
};

const addProductToCart = (req, res) => {
  res.send(`Add a product to the user cart with id : ${req.params.userId}`);
};

module.exports = {
  getCartForUser,
  addProductToCart,
};
