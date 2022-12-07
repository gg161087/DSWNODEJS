const ROUTER = require('express').Router();

const USER_CONTROLLER = require('../controllers/users.controller');

ROUTER.get('/', USER_CONTROLLER.getUsers);
ROUTER.get('/:id', USER_CONTROLLER.getUser);
ROUTER.post('/', USER_CONTROLLER.createUser);
ROUTER.put('/:id', USER_CONTROLLER.updateUser);
ROUTER.delete('/:id', USER_CONTROLLER.deleteUser);

module.exports = ROUTER