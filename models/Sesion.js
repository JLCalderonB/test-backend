const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Sesion = sequelize.define('Sesion', {
    sesion_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    sesion_user_id: {
        type: DataTypes.UUID,
        allowNull: false
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