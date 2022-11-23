const ROUTER = require('express').Router();

const USER_CONTROLLER = require('../controllers/user.controller');

ROUTER.get('/test', USER_CONTROLLER.test);
ROUTER.get('/', USER_CONTROLLER.list);
ROUTER.post('/', USER_CONTROLLER.create);
ROUTER.get('/:userId', USER_CONTROLLER.infoList)

module.exports = ROUTER