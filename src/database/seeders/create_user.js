'use strict';

const models = require('../models/index');
const bcrypt = require('bcryptjs')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([
            models.users.findOrCreate({
                where: {
                    id: "1"
                },
                defaults: {
                    name: "root",
                    age: 25,
                    email: "root@ejemplo.com",
                    username: "root",
                    password: bcrypt.hashSync('root', 10)
                }
            }),
            models.users.findOrCreate({
                where: {
                    id: "2"
                },
                defaults: {
                    name: "Admin",
                    age: 25,
                    email: "admin@ejemplo.com",
                    username: "admin",
                    password: bcrypt.hashSync('admin', 10)
                }
            })
        ])
    },
};