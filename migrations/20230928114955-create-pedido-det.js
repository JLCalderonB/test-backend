'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('pedido_det', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      cab_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      item_num: {
        type: DataTypes.SMALLINT,
        allowNull: false
      },
      stock_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      nro_parte: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      um_vta: {
        type: DataTypes.STRING(3),
        allowNull: false
      },
      tot_item: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      um_desp: {
        type: DataTypes.STRING(3),
        allowNull: false
      },
      tot_item: {
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
    await queryInterface.dropTable('pedido_det');
  }
};