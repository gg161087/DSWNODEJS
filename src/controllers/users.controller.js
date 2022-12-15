const models = require('../database/models/index');
const bcrypt = require('bcryptjs');

module.exports = {

    getUsers: async (req, res) => {

        try {
            const users = await models.users.findAll(
                {attributes: {exclude: ['password']}}
            );

            res.json({
                success: true,
                data: {
                    users: users
                }
            });
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

    },

    getUser: async (req, res) => {

        try {
            const user = await models.users.findOne({
                where: {
                    id: req.params.id                                       
                },
                attributes: {exclude: ['password']}
            });
            
            res.json({
                success: true,
                data: {
                    user: user
                }
            })
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

    },

    createUser: async (req, res) => {

        try {
            req.body.password = bcrypt.hashSync(req.body.password, 10)

            const user = await models.users.create(req.body)

            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

    },
    
    updateUser : async (req, res) => {
        try {
            req.body.password = bcrypt.hashSync(req.body.password, 10)
            const user = await  models.users.findByPk(req.params.id)   

            user.set(req.body)   

            await user.save();
            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })     
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    deleteUser : async (req, res) => {
        try {
            const id = req.params.id
            const user = await  models.users.findByPk(id)
            if (user==null){
                return res.status(500).json({message: 'ID inexistente'})  
            }
            await MODELS.users.destroy({
                where:{
                    id: id
                }
            })
            return res.status(500).json({message: 'Eliminado Correctamente'})
           
        } catch (error) {
            return res.status(500).json({message: error.message})
        }   
    },

    uploadFile: async (req, res) => {
        try {

            const user = await models.users.findOne({
                where: {
                    id: req.body.usuarioId
                }
            })
            if (!user) return res.status(500).json({message: 'usuario inexistente'})  


           
            const file_user = await models.file_user.findOne({
                where: {
                    userId: req.body.userId,
                    name: req.body.name
                }
            })
            if (!file_user) { 

                const file = await models.file_user.create({
                    name: req.body.name, 
                    file: req.file ? req.file.file : null, 
                    file_name: req.file ? req.file.file_name : null, 
                    userId: req.body.userId
                })
            }

            res.json({
                success: true,
                data: {
                    message: "Cargado correctamente"
                }
            })

        } catch (error) {
            return res.status(500).json({message: error.message})            
        }
    },

    downloadFile: async (req, res, next) => {
        try {

           
            const user = await models.user.findOne({
                where: {
                    id: req.body.userId
                }
            })
            if (!user) return res.status(500).json({message: 'usuario inexistente'})

           
            const file = await models.file_user.findOne({
                where: {
                    userId: req.body.userId,
                    name: req.body.name
                }
            })
            if (!file) return res.status(500).json({message: 'arcahivo inexistente'})


            res.download('uploads/archivos-usuarios/' + file.file, file.file_name)

        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}