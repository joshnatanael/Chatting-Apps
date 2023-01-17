const {decodeToken} = require('../helpers/jwt');
const {User} = require('../models');

async function authentication(req, res, next){
  try {
    const {access_token} = req.headers;
    if(!access_token){
      throw("invalidToken");
    }
    const payload = decodeToken(access_token);
    const user = await User.findByPk(payload.id);
    if(!user){
      throw("invalidToken");
    }
    req.user = {
      id: user.id,
      email: user.email
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authentication;