'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('vehiculo', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      propietario_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      vin: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
      },
      placa_patente: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      marca: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      modelo: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      motor_num: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('vehiculo');
  }
};