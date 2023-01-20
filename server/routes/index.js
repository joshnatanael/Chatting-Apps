const Controller = require('../controllers/Controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

const router = require('express').Router();

router.post('/register', Controller.registerUser);
router.post('/login', Controller.loginUser);
router.use(authentication);
router.get('/contacts', Controller.getContacts);
// router.post('/contacts', Controller.postContact);
router.get('/messages/:id', Controller.getMessages);
router.post('/messages/:id', Controller.postMessage);
router.put('/messages/:id', authorization, Controller.editMessage);
router.delete('/messages/:id', authorization, Controller.deleteMessage);

module.exports = router;