'use strict'

module.exports = (sequelize, DataTypes) => {

  let Patient_Doctor = sequelize.define('patient_doctor', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true,
    freezeTableName: true,
  })

  Patient_Doctor.associate = models => {
    Patient_Doctor.belongsTo(models.patients)
    Patient_Doctor.belongsTo(models.doctors)
  }
  return Patient_Doctor
}