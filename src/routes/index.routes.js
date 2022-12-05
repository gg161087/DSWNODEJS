const { Router } = require('express');

const USER_ROUTES = require('./users.routes')
const DOCTORS_ROUTES = require('./doctors.routes')
const PATIENTS_ROUTES = require('./patients.routes')


const ROUT_INIT = () => {
    const ROUTER = Router();
    ROUTER.use('/users', USER_ROUTES)
    ROUTER.use('/doctors', DOCTORS_ROUTES)
    ROUTER.use('/patients', PATIENTS_ROUTES)
    return ROUTER
}

module.exports = { ROUT_INIT }