'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido_det extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedido_det.init({
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
    }
  }, {
    sequelize,
    tableName: 'pedido_det',
    modelName: 'Pedido_det',
  });
  return Pedido_det;
};