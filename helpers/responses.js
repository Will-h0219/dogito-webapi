const serverError = (error, res) => {
  console.error(error);
  return res.status(500).json({
    ok: false,
    message: 'An unexpected error ocurred, contact the administrator',
    causes: error.message
  });
}

const successResponse = (res, data) => {
  return res.json({
    ok: true,
    data
  });
}

module.exports = {
  serverError,
  successResponse
}