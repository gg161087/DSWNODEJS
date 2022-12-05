'use strict';

const MODELS = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            MODELS.users.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    name: "Lalo",
                    last_name: "Landa",
                    email: "lalo.landa@ejemplo.com",
                    age: 18
                }
            }),
            MODELS.users.findOrCreate({
                where: {
                    id: "3"
                },
                defaults: {
                    name: "Cosme",
                    last_name: "Fulanito",
                    email: "cosme.fulanito@ejemplo.com",
                    age: 27
                }
            })
        ])
    },
};