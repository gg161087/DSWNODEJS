const ROUTER = require('express').Router();

const USER_CONTROLLER = require('../controllers/patients.controller');

ROUTER.get('/', USER_CONTROLLER.getPatients);
ROUTER.get('/:id', USER_CONTROLLER.getPatient)
ROUTER.post('/', USER_CONTROLLER.createPatient);
ROUTER.put('/:id', USER_CONTROLLER.updatePatient);
ROUTER.delete('/:id', USER_CONTROLLER.deletePatient);

module.exports = ROUTER