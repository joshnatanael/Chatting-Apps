const Controller = require('../controllers/Controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
const chatRoomFinder = require('../middlewares/chatRoomFinder');

const router = require('express').Router();

router.post('/register', Controller.registerUser);
router.post('/login', Controller.loginUser);
router.use(authentication);
router.get('/chatRooms', Controller.getChatRooms);
router.post('/chatRooms', Controller.postChatRooms);
router.delete('/chatRooms/:ChatRoomId', chatRoomFinder, Controller.deleteChatRoom);
router.put('/chatRooms/:ChatRoomId', chatRoomFinder, Controller.editChatRoom);
router.get('/messages/:ChatRoomId', chatRoomFinder, Controller.getMessages);
router.post('/messages/:ChatRoomId', chatRoomFinder, Controller.postMessage);
router.put('/messages/:messagesId', authorization, Controller.editMessage);
router.delete('/messages/:messagesId', authorization, Controller.deleteMessage);
router.get('/contacts', Controller.getContacts);
router.post('/contacts', Controller.postContact);
// router.delete('/contacts/:contactId', Controller.deleteContact);

module.exports = router;