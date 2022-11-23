const MODELS = require('../database/models/index');

module.exports = {

    list: async (req, res, next) => {

        try {
            const USERS = await MODELS.users.findAll();

            res.json({
                success: true,
                data: {
                    users: USERS
                }
            });
        } catch (err) {
            return next(err);
        }

    },

    create: async (req, res, next) => {

        try {
            const USER = await MODELS.users.create(req.body)

            res.json({
                success: true,
                data: {
                    id: USER.id
                }
            })
        } catch (err) {
            return next(err);
        }

    },

    infoList: async (req, res, next) => {

        try {
            const USER = await MODELS.users.findOne({
                where: {
                    id: req.params.userId
                }
            });
            
            res.json({
                success: true,
                data: {
                    user: USER
                }
            })
        } catch (err) {
            return next(err);
        }

    },

    test: async (req, res, next) => {
        try {
            console.log('Ejecutando test')

            res.json({
                message: 'Hola mundo'
            })
        } catch (err) {
            console.log(err)
        }
    },

}