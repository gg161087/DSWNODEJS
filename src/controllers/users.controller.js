const MODELS = require('../database/models/index');

module.exports = {

    getUsers: async (req, res) => {

        try {
            const USERS = await MODELS.users.findAll();

            res.json({
                success: true,
                data: {
                    users: USERS
                }
            });
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

    },

    getUser: async (req, res) => {

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
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

    },

    createUser: async (req, res) => {

        try {
            const USER = await MODELS.users.create(req.body)

            res.json({
                success: true,
                data: {
                    id: USER.id
                }
            })
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

    },
    
    updateUser : async (req, res) => {
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
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    },

    deleteUser : async (req, res) => {
        try {
            const id = req.params.id
            const user = await  MODELS.users.findByPk(id)
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
    }
}