const {Message} = require('../models');

async function authorization(req, res, next){
  try {
    const {id} = req.params;
    const message = await Message.findByPk(id);
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