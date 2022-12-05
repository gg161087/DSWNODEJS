const MODELS = require('../database/models/index');

module.exports = {

    getUsers: async (req, res, next) => {

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
    getUser: async (req, res, next) => {

        try {
            const USER = await MODELS.users.findOne({
                where: {
                    id: req.params.idUser
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

    postUser: async (req, res, next) => {

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
    postUser : async (req, res)=>{
        try {
            const USER = await MODELS.users.create(req.body)

            res.json({
                success: true,
                data: {
                    id: USER.id
                }
            })

        } catch (err) {
            return next(err)
        }
    },
    putUser : (req, res)=>{
        res.send('Actualizando users')
    },
    deleteUser : (req, res)=>{
        res.send('eliminando users')
    },

    test: async (req, res, next) => {
        try {
            console.log('Ejecutando test en users')

            res.json({
                message: 'Hola users'
            })
        } catch (err) {
            console.log(err)
        }
    },

}