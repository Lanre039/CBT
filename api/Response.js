export default (statusCode = 200, res, data, error = null) => {
  const response = { data, error };
  return res.status(statusCode).json(response);
};
