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
  static loginUser(req, res, next){

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