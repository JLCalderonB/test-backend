const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Sesion = sequelize.define('Sesion', {
    sesion_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    sesion_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sesion_fin: {
        type: DataTypes.DATE,
        allowNull: true
    },
    sesion_token: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Sesion;