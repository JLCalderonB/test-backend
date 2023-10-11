'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('sesion', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      inicio: {
        type: DataTypes.DATE,
        allowNull: false
      },
      fin: {
        type: DataTypes.DATE,
        allowNull: true
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false
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
    await queryInterface.dropTable('sesion');
  }
};