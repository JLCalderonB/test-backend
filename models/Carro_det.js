'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carro_det extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carro_det.init({
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
    }
  }, {
    sequelize,
    tableName: 'carro_det',
    modelName: 'Carro_det',
  });
  return Carro_det;
};