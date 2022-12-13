'use strict'

module.exports = (sequelize, DataTypes) => {

  let File_User = sequelize.define('file_user', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },   
    file: {
      type: DataTypes.STRING,
      allowNull: true
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    paranoid: true,
    freezeTableName: true,
  })

  File_User.associate = models => {
    File_User.belongsTo(models.users)
  }

  return File_User
}