module.exports = (err, req, res, next) => {
  let status = err.status || 500;

  res.status(status);
  console.log(err.message);
  res.send({
    status,
    message: err.message,
  });
};
