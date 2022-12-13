const router = require('express').Router();

const patients_controller = require('../controllers/patients.controller');

router.get('/', patients_controller.getPatients);
router.get('/:id', patients_controller.getPatient)
router.post('/', patients_controller.createPatient);
router.put('/:id', patients_controller.updatePatient);
router.delete('/:id', patients_controller.deletePatient);

module.exports = router