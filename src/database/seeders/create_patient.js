'use strict';

const MODELS = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            MODELS.patients.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    name: "Lalo",
                    last_name: "Landa",
                    dni: 85274104,
                    email: "lalo.landa@ejemplo.com",
                    age: 25,
                    social_work: 987654,                    
                }
            }),
            MODELS.patients.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    name: "Cosme",
                    last_name: "Fulanito",
                    dni: 8527410,
                    email: "cosme.fulanito@ejemplo.com",
                    age: 52,
                    social_work: 741852,                                        
                }
            })
        ])
    },
};