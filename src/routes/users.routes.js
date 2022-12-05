const ROUTER = require('express').Router();

const USER_CONTROLLER = require('../controllers/users.controller');

ROUTER.get('/test', USER_CONTROLLER.test);
ROUTER.get('/', USER_CONTROLLER.getUsers);
ROUTER.get('/:idUser', USER_CONTROLLER.getUser);
ROUTER.post('/', USER_CONTROLLER.postUser);
ROUTER.put('/', USER_CONTROLLER.putUser);
ROUTER.delete('/', USER_CONTROLLER.deleteUser);

module.exports = ROUTER