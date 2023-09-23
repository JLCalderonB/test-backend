const { DataTypes } = require('sequelize');
const sequelize = require('../db-connection');
const Carro_cab = require('./Carro_cab');
const Carro_det = require('./Carro_det');
const Comuna = require('./Comuna');
const Intentologin = require('./Intentologin');
const Pais = require('./Pais');
const Pedido_cab = require('./Pedido_cab');
const Pedido_det = require('./Pedido_det');
const Perfil = require('./Perfil');
const Propietario = require('./Propietario');
const Proveedor = require('./Proveedor');
const Region = require('./Region');
const Repuesto = require('./Repuesto');
const Sesion = require('./Sesion');
const Stock = require('./Stock');
const User = require('./User');
const Vehiculo = require('./Vehiculo');

Perfil.hasMany(User, {
    foreignKey: {
        name: 'user_perfil',
        allowNull: false
    }
});
Pais.hasMany(Region, {
    foreignKey: {
        name: 'region_pais_id',
        allowNull: false
    }
});
Region.hasMany(Comuna, {
    foreignKey: {
        name: 'comuna_region_id',
        allowNull: false
    }
});


