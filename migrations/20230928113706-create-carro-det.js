'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('carro_det', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      cab_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      correlativo: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      stock_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      fec_vig: {
        type: DataTypes.DATE,
        allowNull: false
      },
      repuesto_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      num_parte: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      cant: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      precio_unitario: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable('carro_det');
  }
};