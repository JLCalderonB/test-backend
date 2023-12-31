'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Intentologin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Intentologin.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    fecha_hora: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    ip_address: {
      type: DataTypes.STRING(16)
    },
    exito: {
      type: DataTypes.TINYINT,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'intentologin',
    modelName: 'Intentologin',
  });
  return Intentologin;
};