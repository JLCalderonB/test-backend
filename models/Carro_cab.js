
const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Carro_cab = sequelize.define('Carro_cab', {
    carro_cab_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    carro_cab_prop_id: {
        type: DataTypes.UUID,
        allowNull: false
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Carro_cab;