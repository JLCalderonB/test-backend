const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');

const Repuesto = sequelize.define('Repuesto', {
    repuesto_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    rep_num_parte: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    rep_desc: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Repuesto;