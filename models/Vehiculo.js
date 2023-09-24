const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Vehiculo = sequelize.define('Vehiculo', {
    vehiculo_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    veh_propietario_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    veh_vin: {
        type: DataTypes.STRING(45),
        unique: true,
        allowNull: false
    },
    veh_placa_patente: {
        type: DataTypes.STRING(45),
        unique: true,
        allowNull: false
    },
    veh_marca: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    veh_modelo: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    veh_year: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    veh_motor_num: {
        type: DataTypes.STRING(45),
        allowNull: true
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Vehiculo;