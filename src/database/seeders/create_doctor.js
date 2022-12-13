'use strict';

const models = require("../models/index");

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.doctors.findOrCreate({
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
            models.doctors.findOrCreate({
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