'use strict';

const MODELS = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            MODELS.doctors.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    name: "Dos",
                    last_name: "Doctor",
                    email: "doctor_dos@ejemplo.com",
                    specialty: "cirujano",
                    enrollment: 213456
                }
            }),
            MODELS.doctors.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    name: "Tres",
                    last_name: "Doctor",
                    email: "doctor_tres@ejemplo.com",
                    specialty: "cirujano",
                    enrollment: 312456
                }
            })
        ])
    },
};