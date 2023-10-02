'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('stock', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      prov_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      fec_vig: {
        type: DataTypes.DATEONLY,
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
      desc_parte: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      um_vta: {
        type: DataTypes.STRING(3),
        allowNull: false
      },
      precio_uni: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      um_desp: {
        type: DataTypes.STRING(3),
        allowNull: false
      },
      onhand: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      encarrito: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      enpedido: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      disponible: {
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
    await queryInterface.dropTable('stock');
  }
};