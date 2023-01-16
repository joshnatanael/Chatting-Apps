const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const {User, Message} = require('../models');

class Controller{
  static async registerUser(req, res, next){
    try {
      const {fullName, email, password, phoneNumber, role, status} = req.body;
      const newUser = await User.create({fullName, email, password, phoneNumber, role, status});
      res.status(201).json({fullName: newUser.fullName, email: newUser.email});
    } catch (error) {
      next(error)
    }
  }
  static async loginUser(req, res, next){
    try {
      const {email, password} = req.body;
      if(!email){
        throw("noEmail");
      }
      if(!password){
        throw("noPassword");
      }
      const user = await User.findOne({
        where: {
          email
        }
      });
      if(!user){
        throw("invalidUser")
      }
      const isValidPassword = comparePassword(password, user.password);
      if(!isValidPassword){
        throw("invalidUser");
      }
      const payload = {id: user.id};
      const access_token = generateToken(payload);
      res.status(200).json({access_token});
    } catch (error) {
      next(error);
    }
  }
  static getMessages(req, res, next){

  }
  static postMessage(req, res, next){

  }
  static editMessage(req, res, next){

  }
  static deleteMessage(req, res, next){

  }
}

module.exports = Controller;