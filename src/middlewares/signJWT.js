const jwt = require('jsonwebtoken')
const global_consts = require('../const/globalConsts')

module.exports = function (user) {

    if(user){
        const token = jwt.sign({
            id: user.id
        },
            global_consts.JWT_SECRET,
            {
                expiresIn: '1000m'
            }
        )
        return token

    } else {
        return null
    }
    
}