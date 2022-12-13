const { Router } = require('express');

const authRoutes = require('./auth.routes')
const users_routes = require('./users.routes')
const doctors_routes = require('./doctors.routes')
const patients_routes = require('./patients.routes')
const decodeJWT = require('../middlewares/decodeJWT')

const routesInit = () => {
    const router = Router();
    router.use('/users',decodeJWT , users_routes)
    router.use('/doctors',decodeJWT , doctors_routes)
    router.use('/patients',decodeJWT , patients_routes)
    return router
}

const routesAuth = () => {
    const router = Router()
    router.use('/auth', authRoutes)
    return router
}

module.exports = { routesInit, routesAuth}