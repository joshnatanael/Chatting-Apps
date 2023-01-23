const {ChatRoom} = require('../models');

async function chatRoomFinder(req, res, next){
  try {
    const {ChatRoomId} = req.params;
    const chatRoom = await ChatRoom.findByPk(ChatRoomId);
    if(!chatRoom){
      throw("noChatRoom")
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = chatRoomFinder;