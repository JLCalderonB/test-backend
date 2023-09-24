
const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Pais = sequelize.define('Pais', {
    pais_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    pais_abrev: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    pais_nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Pais;