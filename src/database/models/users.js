'use strict'

module.exports = (sequelize, DataTypes) => {

  let Users = sequelize.define('users', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
    },    
    email: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    paranoid: true,
    freezeTableName: true,
  })

  Users.associate = models => {
    Users.hasMany(models.file_user)
  }

  return Users
}