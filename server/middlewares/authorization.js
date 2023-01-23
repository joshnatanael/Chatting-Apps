const {Message} = require('../models');

async function authorization(req, res, next){
  try {
    const {messagesId} = req.params;
    const message = await Message.findByPk(messagesId);
    if (!message) {
      throw("messageNotFound")
    }
    if(message.SenderId !== req.user.id){
      throw("forbidden");
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authorization;