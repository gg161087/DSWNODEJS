const Joi = require('joi') 

let createUser = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().optional(),
    email: Joi.string().email().optional(),
    username: Joi.string().required(),
    password: Joi.string().required()
})

module.exports = {
    createUser
}