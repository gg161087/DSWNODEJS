const MODELS = require('../database/models/index');
const ERRORS = require("../const/errors_users")

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
            return next(ERRORS.alListar);
        }

    },

    getUser: async (req, res, next) => {

        try {
            const USER = await MODELS.users.findOne({
                where: {
                    id: req.params.id
                }
            });
            
            res.json({
                success: true,
                data: {
                    user: USER
                }
            })
        } catch (err) {
            return next(ERRORS.alObtener);
        }

    },

    createUser: async (req, res, next) => {

        try {
            const USER = await MODELS.users.create(req.body)

            res.json({
                success: true,
                data: {
                    id: USER.id
                }
            })
        } catch (err) {
            return next(ERRORS.alCrear);
        }

    },
    
    updateUser : async (req, res, next) => {
        try {
            const USER = await  MODELS.users.findByPk(req.params.id)    
            const { name, last_name, email, age} = req.body;            
            USER.name = name;
            USER.last_name = last_name;
            USER.email = email;
            USER.age = age;            
            await USER.save();
            res.json({
                success: true,
                data: {
                    id: USER.id
                }
            })     
        } catch (err) {
            return next(ERRORS.alActualizar);
        }
    },

    deleteUser : async (req, res, next) => {
        try {
            await MODELS.users.destroy({
                where:{
                    id: req.params.id
                }
            }) 
        } catch (error) {
            return next(ERRORS.alEliminar)
        }   
    }

}