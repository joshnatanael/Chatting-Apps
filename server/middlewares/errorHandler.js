function errorHandler (err, req, res, next) {
  console.log(err);
  let code = 500;
  let message = "Internal Server Error";
  if(err.name === "SequelizeValidationError"){
    code = 400;
    message = err.errors[0].message;
  }
  else if(err.name === "SequelizeUniqueConstraintError"){
    code = 400;
    message = "Email must be unique";
  }
  res.status(code).json({message});
}

module.exports = errorHandler;