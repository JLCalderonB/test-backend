
const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');


const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    user_perfil: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    }
},
    {
        freezeTableName: true,
        Timestamps: false
    });

module.exports = User;