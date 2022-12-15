'use strict'
const bcrypt = require('bcryptjs')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.addColumn('user', 'password', {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: bcrypt.hashSync('password', 10)
            }),
        ])
    },

    down: (queryInterface, Sequelize) => {    
        return queryInterface.dropTable('users');    
    }
}