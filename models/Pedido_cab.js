'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido_cab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedido_cab.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    num: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    comprador_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    neto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iva: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fact_calle: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fact_num: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    fact_block_depto: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fact_pais_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    fact_region_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    fact_comuna_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    desp_calle: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    desp_num: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    desp_block_depto: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    desp_pais_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    desp_region_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    desp_comuna_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    desp_geo_long: {
      type: DataTypes.DECIMAL(8, 6),
      allowNull: true
    },
    desp_geo_lat: {
      type: DataTypes.DECIMAL(8, 6),
      allowNull: true
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
    tableName: 'pedido_cab',
    modelName: 'Pedido_cab',
  });
  return Pedido_cab;
};