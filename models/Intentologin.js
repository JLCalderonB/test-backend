
const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const Intentologin = sequelize.define('Intentologin', {
    intento_login_id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        primaryKey: true,
        allowNull: false
    },
    int_login_user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    int_login_fecha_hora: {
        type: DataTypes.DATE,
        allowNull: false
    },
    int_login_ip_address: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    int_login_exito: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = Intentologin;