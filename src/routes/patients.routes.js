const ROUTER = require('express').Router();

const USER_CONTROLLER = require('../controllers/patients.controller');

ROUTER.get('/test', USER_CONTROLLER.test);
ROUTER.get('/', USER_CONTROLLER.getPatients);
ROUTER.get('/:idPatient', USER_CONTROLLER.getPatient)
ROUTER.post('/', USER_CONTROLLER.postPatient);
ROUTER.put('/', USER_CONTROLLER.putPatient);
ROUTER.delete('/', USER_CONTROLLER.deletePatient);

module.exports = ROUTER