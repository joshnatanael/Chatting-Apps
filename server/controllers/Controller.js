const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const {User, Message, ChatRoom, Member, Contact} = require('../models');
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
  static async getChatRooms(req, res, next){
    try {
      const chatRooms = await Member.findAll({
        where: {
          UserId: req.user.id
        },
        include: {
          model: ChatRoom,
          include: {
            model: Message,
            limit: 1
          }
        }
      })
      res.status(200).json(chatRooms);
    } catch (error) {
      next(error);
    }
  }
  static async postChatRooms(req, res, next){
    try {
      const {name, type, members} = req.body;
      if(!members.length){
        throw("noMember")
      }
      members.push(req.user.id);
      const chatRoom = await ChatRoom.create({
        name,
        type
      })
      await Member.bulkCreate(members.map(el=>{
        return {
          UserId: el,
          ChatRoomId: chatRoom.id
        }
      }));
      res.status(201).json({message: "Successfully created new chat room."});
    } catch (error) {
      next(error);
    }
  }
  static async deleteChatRoom(req, res, next){
    try {
      const {ChatRoomId} = req.params;
      await ChatRoom.destroy({
        where: {
          id: ChatRoomId
        }
      })
      res.status(200).json({message: `Successfully delete chat room with id ${ChatRoomId}.`});
    } catch (error) {
      next(error);
    }
  }
  static async editChatRoom(req, res, next){
    try {
      const {name, type} = req.body;
      const {ChatRoomId} = req.params;
      await ChatRoom.update({
        name, type
      }, {
        where: {
          id: ChatRoomId
        }
      })
      res.status(200).json({message: `Successfully edit chat room with id ${ChatRoomId}.`});
    } catch (error) {
      next(error);
    }
  }
  static async getMessages(req, res, next){
    try {
      const {ChatRoomId} = req.params;
      const messages = await Message.findAll({
        where:{
          ChatRoomId
        },
        order: [
          ['createdAt', 'DESC']
        ]
      })
      res.status(200).json(messages)
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
      const {ChatRoomId} = req.params;
      await Message.create({
        SenderId: req.user.id,
        message,
        ChatRoomId
      });
      res.status(201).json({message: "Successfully sent message!"})
    } catch (error) {
      next(error);
    }
  }
  static async editMessage(req, res, next){
    try {
      const {messagesId} = req.params;
      const {message} = req.body;
      await Message.update(
        {
          message
        },
        {
          where: {
            id: messagesId
          }
        }
      )
      res.status(200).json({message: "Message sucessfully edited"})
    } catch (error) {
      next(error);
    }
  }
  static async deleteMessage(req, res, next){
    try {
      const {messagesId} = req.params;
      await Message.destroy({
        where: {
          id: messagesId
        }
      })
      res.status(200).json({message: `Message with id ${messagesId} successfully deleted`});
    } catch (error) {
      next(error);
    }
  }
  static async getContacts(req, res, next){
    try {
      const contacts = await Contact.findAll({
        where: {
          UserId: req.user.id
        },
        include: {
          model: User,
          attributes: ["fullName", "phoneNumber", "status"]
        }
      })
      res.status(200).json(contacts);
    } catch (error) {
      next(error);
    }
  }
  static async postContact(req, res, next){
    try {
      const {FriendId} = req.body;
      const friendAccount = await User.findByPk(FriendId);
      if(!friendAccount){
        throw("noUser");
      }
      const contact = await Contact.findOne({
        where: {
          UserId:req.user.id,
          FriendId
        }
      })
      if(contact){
        throw("alreadyAdded");
      }
      await Contact.create({
        UserId: req.user.id,
        FriendId
      })
      res.status(200).json({message: "Successfully add to contact list"});
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;