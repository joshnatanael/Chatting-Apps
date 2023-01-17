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
  else if(err === "noPassword"){
    code = 400;
    message = "Password is required";
  }
  else if(err === "noEmail"){
    code = 400;
    message = "Email is required";
  }
  else if(err === "invalidUser"){
    code = 401;
    message = "Invalid email or password";
  }
  else if(err === "invalidToken"){
    code = 401;
    message = "Invalid token";
  }
  res.status(code).json({message});
}

module.exports = errorHandler;