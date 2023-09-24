
const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Pedido_cab = sequelize.define('Pedido_cab', {
    pedido_cab_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    ped_num: {
        type: DataTypes.INTEGER,
        autogenerated: true,
        unique: true,
        allowNull: false
    },
    ped_estado: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    ped_fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ped_comprador_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ped_neto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ped_iva: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ped_total: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ped_fact_calle: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    ped_fact_numero: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    ped_fact_block_depto: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    ped_fact_pais_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ped_fact_region_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ped_fact_comuna_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ped_desp_calle: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    ped_desp_numero: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    ped_desp_block_depto: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    ped_desp_pais_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ped_desp_region_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ped_desp_comuna_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ped_desp_geo_longitud: {
        type: DataTypes.DECIMAL(8, 6),
        allowNull: true
    },
    ped_desp_geo_latitud: {
        type: DataTypes.DECIMAL(8, 6),
        allowNull: true
    },
    ped_fono_pais: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    ped_fono_zona: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    ped_fono_num: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Pedido_cab;