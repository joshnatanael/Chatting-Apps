const Controller = require('../controllers/Controller');
const authentication = require('../middlewares/authentication');

const router = require('express').Router();

router.post('/register', Controller.registerUser);
router.post('/login', Controller.loginUser);
router.use(authentication);
router.get('/messages/:id', Controller.getMessages);
router.post('/messages', Controller.postMessage);
router.put('/messages/:id', Controller.editMessage);
router.delete('/messages/:id', Controller.deleteMessage);

module.exports = router;