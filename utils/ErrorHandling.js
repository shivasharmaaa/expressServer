const sendErrorResponse = (res, err) => {
  let msg = err.message;
  let status = err.statusCode;
  return res.status(status).json({
    message: msg,
    status: false,
  });
};

const sendResponseCart = (res, id, statusCode) => {
  res.status(statusCode).json({
    data: id,
    status: true,
  });
};
const sendResponseProduct = (res, msg, statusCode) => {
  res.status(statusCode).json({
    data: msg,
    status: true,
  });
};
const sendResponseUsers = (res, msg, statusCode) => {
  res.status(statusCode).json({
    data: msg,
    status: true,
  });
};

module.exports = {
  sendErrorResponse,
  sendResponseCart,
  sendResponseProduct,
  sendResponseUsers,
};
