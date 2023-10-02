'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proveedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Proveedor.init({
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
    }
  }, {
    sequelize,
    tableName: 'proveedor',
    modelName: 'Proveedor',
  });
  return Proveedor;
};