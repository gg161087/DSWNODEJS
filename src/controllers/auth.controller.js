const models = require('../database/models/index');
const bcrypt = require('bcryptjs');
const signJWT = require('../middlewares/signJWT')

module.exports = {

    login: async (req, res) => {

        try {
            const user = await models.users.findOne({
                where: {
                    username: req.body.username
                }
            })
            var bandera = false
            if(user){
                bandera = bcrypt.compareSync(req.body.password, user.password)
            }
            if(!user || !bandera){
                return res.json({message: 'username or password incorrect'})
            }
            res.json({
                success: true,
                data: {
                    token: signJWT(user),
                    id: user.id
                }
            })
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

    },

    register: async (req, res) => {
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

    }
}