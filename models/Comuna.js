const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Comuna = sequelize.define('Comuna', {
    comuna_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    comuna_region_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    comuna_nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Comuna;