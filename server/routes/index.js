const Controller = require('../controllers/Controller');

const router = require('express').Router();

router.post('/register', Controller.registerUser);
router.post('/login', Controller.loginUser);
router.get('/messages', Controller.getMessages);
router.post('/messages', Controller.postMessage);
router.put('/messages/:id', Controller.editMessage);
router.delete('/messages/:id', Controller.deleteMessage);

module.exports = router;