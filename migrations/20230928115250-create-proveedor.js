'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('proveedor', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      rut_num: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      rut_dig: {
        type: DataTypes.CHAR(1),
        allowNull: false
      },
      razon_social: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      dir_calle: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      dir_numero: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      dir_block_depto: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      dir_pais_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      dir_region_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      dir_comuna_id: {
        type: DataTypes.UUID,
        allowNull: false
      },
      fono_pais: {
        type: DataTypes.SMALLINT,
        allowNull: true
      },
      fono_zona: {
        type: DataTypes.SMALLINT,
        allowNull: true
      },
      fono_num: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable('proveedor');
  }
};