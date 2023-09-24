const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Propietario = sequelize.define('Propietario', {
    propietario_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    prop_rut_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    prop_rut_dig: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    prop_nombres: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    prop_apellidos: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    prop_fact_calle: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    prop_fact_numero: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    prop_fact_block_depto: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    prop_fact_pais_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    prop_fact_region_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    prop_fact_comuna_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    prop_desp_calle: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    prop_desp_numero: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    prop_desp_block_depto: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    prop_desp_pais_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    prop_desp_region_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    prop_desp_comuna_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    prop_desp_geo_longitud: {
        type: DataTypes.DECIMAL(8, 6),
        allowNull: true
    },
    prop_desp_geo_latitud: {
        type: DataTypes.DECIMAL(8, 6),
        allowNull: true
    },
    prop_fono_pais: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    prop_fono_zona: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    prop_fono_num: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Propietario;