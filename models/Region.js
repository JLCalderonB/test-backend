const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Region = sequelize.define('Region', {
    region_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    region_abrev: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    region_nombre: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Region;