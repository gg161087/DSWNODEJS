const jwt = require('jsonwebtoken')
const models = require('../database/models/index')
const moment = require('moment')
const global_constants = require('../const/globalConsts')

module.exports = async function (req, res, next) {

    if (req.header('Authorization') && req.header('Authorization').split(' ').length > 1) {
        try {
            let dataToken = jwt.verify(req.header('Authorization').split(' ')[1], global_constants.JWT_SECRET)

            if (dataToken.exp <= moment().unix())
                return res.status(500).json({message: 'Sesion Expirada'})                

            res.locals.token = dataToken 

            const user = await models.users.findOne({
                where: {
                    id: dataToken.id
                }
            })
            if (!user) return res.status(500).json({message: 'usuario no autorizado'}) 

            res.locals.user = user

            next()

        } catch (error) {
            return res.status(500).json({message: error.message}) 
        }

    } else {
        return res.status(500).json({message: 'usuario no autorizado'}) 
    }
}