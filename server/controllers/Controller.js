const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const {User, Message} = require('../models');
const { Op } = require("sequelize");

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
  static async getMessages(req, res, next){
    try {
      const {id} = req.params;
      const messages = await Message.findAll({
        where:{
          [Op.or]: [
            {
              [Op.and]: [
                { SenderId: req.user.id },
                { ReceiverId: id }
              ]
            },
            {
              [Op.and]: [
                { SenderId: id },
                { ReceiverId: req.user.id }
              ]
            }
          ]
        },
        order: [
          ['createdAt', 'DESC']
        ]
      })
      res.status(200).json({messages})
    } catch (error) {
      next(error);
    }
  }
  static async postMessage(req, res, next){
    try {
      const {message} = req.body;
      if(!message){
        throw("noMessage")
      }
      const {id} = req.params;
      await Message.create({
        SenderId: req.user.id,
        ReceiverId: id,
        message
      });
      res.status(201).json({message: "Successfully sent message!"})
    } catch (error) {
      next(error);
    }
  }
  static async editMessage(req, res, next){
    try {
      const {id} = req.params;
      const {message} = req.body;
      await Message.update(
        {
          message
        },
        {
          where: {
            id
          }
        }
      )
      res.status(200).json({message: "Message sucessfully edited"})
    } catch (error) {
      next(error);
    }
  }
  static deleteMessage(req, res, next){

  }
}

module.exports = Controller;