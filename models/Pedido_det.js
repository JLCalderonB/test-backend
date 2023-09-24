const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Pedido_det = sequelize.define('Pedido_det', {
    pedido_det_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    ped_det_cab_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ped_det_item_num: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    ped_det_stock_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    ped_det_nro_parte: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    ped_det_rep_desc: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    ped_det_cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ped_det_um_vta: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    ped_det_precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ped_det_um_desp: {
        type: DataTypes.STRING(3),
        allowNull: false
    },
    ped_det_tot_item: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        freezeTableName: true,
        Timestamps: false
    }
);

module.exports = Pedido_det;