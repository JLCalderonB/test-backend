const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Comuna = sequelize.define('Comuna', {
    comuna_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
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