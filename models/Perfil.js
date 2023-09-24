
const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Perfil = sequelize.define('Perfil', {
    perfil_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    perfil_desc: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Perfil;