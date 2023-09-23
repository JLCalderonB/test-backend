const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Carro_det = sequelize.define('Carro_det', {
    carro_det_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    carro_det_correlativo: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    carro_det_fec_vig: {
        type: DataTypes.DATE,
        allowNull: false
    },
    carro_det_cant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    carro_det_precio_unitario: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    {
        freezeTableName: true,
        Timestamps: false
    }
);

module.exports = Carro_det;