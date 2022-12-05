const ROUTER = require('express').Router();

const USER_CONTROLLER = require('../controllers/doctors.controller');

ROUTER.get('/test', USER_CONTROLLER.test);
ROUTER.get('/', USER_CONTROLLER.getDoctors);
ROUTER.get('/:idDoctor', USER_CONTROLLER.getDoctor)
ROUTER.post('/', USER_CONTROLLER.postDoctor);
ROUTER.put('/', USER_CONTROLLER.putDoctor);
ROUTER.delete('/', USER_CONTROLLER.deleteDoctor);

module.exports = ROUTER