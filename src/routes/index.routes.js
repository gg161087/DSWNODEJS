const { Router } = require('express');

const USER_ROUTES = require('./user.routes')

const ROUT_INIT = () => {
    const ROUTER = Router();
    ROUTER.use('/users', USER_ROUTES)
    return ROUTER
}

module.exports = { ROUT_INIT }