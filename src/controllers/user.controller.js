module.exports = {

    list: async (req, res) => {

    },

    create: async (req, res) => {

    },

    infoList: async (req, res) => {

    },

    test: async (req, res) => {
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