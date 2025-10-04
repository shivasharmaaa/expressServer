const {
  sendResponseCart,
  sendErrorResponse,
} = require("../utils/ErrorHandling");

const getCartForUser = (req, res) => {
  let uId = req.params.id;
  try {
    if (!uId) {
      const err = new Error("page not found!");
      err.statusCode = 404;
      throw err;
    }
    return sendResponseCart(res, uId, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
  // res.send(`Fetches the cart for a user with id :${req.params.userId} `);
};

const addProductToCart = (req, res) => {
  let uId = req.params.id;
  try {
    if (!uId) {
      const err = new Error("Page not found!");
      err.statusCode = 404;
      throw err;
    }
    return sendResponseCart(res, uId, 200);
  } catch (err) {
    return sendErrorResponse(res, err);
  }
};

module.exports = {
  getCartForUser,
  addProductToCart,
};
