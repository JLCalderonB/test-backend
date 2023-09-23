const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Stock = sequelize.define('Stock', {
    stock_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    stock_fec_vig: {
        type: DataTypes.DATE,
        allowNull: false
    },
    stock_desc_parte: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    stock_um_vta: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    stock_precio_unitario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock_um_desp: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    stock_onhand: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock_encarrito: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock_enpedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock_disponible: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    }
);

module.exports = Stock;