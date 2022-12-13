const router = require('express').Router();

const doctors_controller = require('../controllers/doctors.controller');

router.get('/', doctors_controller.getDoctors);
router.get('/:id', doctors_controller.getDoctor)
router.post('/', doctors_controller.createDoctor);
router.put('/:id', doctors_controller.updateDoctor);
router.delete('/:id', doctors_controller.deleteDoctor);

module.exports = router