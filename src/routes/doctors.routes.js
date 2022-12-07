const ROUTER = require('express').Router();

const USER_CONTROLLER = require('../controllers/doctors.controller');

ROUTER.get('/', USER_CONTROLLER.getDoctors);
ROUTER.get('/:id', USER_CONTROLLER.getDoctor)
ROUTER.post('/', USER_CONTROLLER.createDoctor);
ROUTER.put('/:id', USER_CONTROLLER.updateDoctor);
ROUTER.delete('/:id', USER_CONTROLLER.deleteDoctor);

module.exports = ROUTER