const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Proveedor = sequelize.define('Proveedor', {
    proveedor_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    prov_rut_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    prov_rut_dig: {
        type: DataTypes.CHAR(1),
        allowNull: false
    },
    prov_razon_social: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    prov_dir_calle: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    prov_dir_numero: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    prov_dir_block_depto: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    prov_desp_pais_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    prov_desp_region_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    prov_desp_comuna_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    prov_fono_pais: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    prov_fono_zona: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    prov_fono_num: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Proveedor;