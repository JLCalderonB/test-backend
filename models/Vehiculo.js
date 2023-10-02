'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Vehiculo.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    propietario_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    vin: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    placa_patente: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    motor_num: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vehiculo',
    modelName: 'Vehiculo',
  });
  return Vehiculo;
};