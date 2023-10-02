'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stock.init({
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
    }
  }, {
    sequelize,
    tableName: 'stock',
    modelName: 'Stock',
  });
  return Stock;
};