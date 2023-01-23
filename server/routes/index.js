const Controller = require('../controllers/Controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

const router = require('express').Router();

router.post('/register', Controller.registerUser);
router.post('/login', Controller.loginUser);
router.use(authentication);
router.get('/chatRooms', Controller.getChatRooms);
router.post('/chatRooms', Controller.postChatRooms);
// router.delete('/chatRooms/:ChatRoomId', Controller.deleteChatRooms);
// router.put('/chatRooms/:ChatRoomId', Controller.editChatRooms);
router.get('/messages/:ChatRoomId', Controller.getMessages);
router.post('/messages/:ChatRoomId', Controller.postMessage);
router.put('/messages/:messagesId', authorization, Controller.editMessage);
router.delete('/messages/:messagesId', authorization, Controller.deleteMessage);

module.exports = router;