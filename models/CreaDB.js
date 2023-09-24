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


// FOREIGN KEYS for User table
Perfil.hasMany(User, {
    foreignKey: {
        name: 'user_perfil',
        allowNull: false
    }
});

// FOREIGN KEYS for Sesion table
User.hasMany(Sesion, {
    foreignKey: {
        name: 'sesion_user_id',
        allowNull: false
    }
});

// FOREIGN KEYS for Intentologin table
User.hasMany(Intentologin, {
    foreignKey: {
        name: 'int_login_user_id',
        allowNull: false
    }
});
// FOREIGN KEYS for Region table
Pais.hasMany(Region, {
    foreignKey: {
        name: 'region_pais_id',
        allowNull: false
    }
});

// FOREIGN KEYS for Comuna table
Region.hasMany(Comuna, {
    foreignKey: {
        name: 'comuna_region_id',
        allowNull: false
    }
});

// FOREIGN KEYS for Propietario table
User.hasOne(Proveedor, {
    foreignKey: {
        name: 'propietario_id',
        allowNull: false
    }
});
Pais.hasOne(Propietario, {
    foreignKey: {
        name: 'prop_fact_pais_id',
        allowNull: false
    }
});
Region.hasOne(Propietario, {
    foreignKey: {
        name: 'prop_fact_region_id',
        allowNull: false
    }
});
Comuna.hasOne(Propietario, {
    foreignKey: {
        name: 'prop_fact_comuna_id',
        allowNull: false
    }
});
Pais.hasOne(Propietario, {
    foreignKey: {
        name: 'prop_desp_pais_id',
        allowNull: false
    }
});
Region.hasOne(Propietario, {
    foreignKey: {
        name: 'prop_desp_region_id',
        allowNull: false
    }
});
Comuna.hasOne(Propietario, {
    foreignKey: {
        name: 'prop_desp_comuna_id',
        allowNull: false
    }
});

// FOREIGN KEYS for Proveedor table
User.hasOne(Proveedor, {
    foreignKey: {
        name: 'proveedor_id',
        allowNull: false
    }
});
Pais.hasOne(Proveedor, {
    foreignKey: {
        name: 'prov_dir_pais_id',
        allowNull: false
    }
});
Region.hasOne(Proveedor, {
    foreignKey: {
        name: 'prov_dir_region_id',
        allowNull: false
    }
});
Comuna.hasOne(Proveedor, {
    foreignKey: {
        name: 'prov_dir_comuna_id',
        allowNull: false
    }
});

// FOREIGN KEYS for Vehiculo table
Propietario.hasMany(Vehiculo, {
    foreignKey: {
        name: 'veh_propietario_id',
        allowNull: false
    }
});

// FOREIGN KEYS for Carro_cab table
Propietario.hasOne(Carro_cab, {
    foreignKey: {
        name: 'carro_cab_prop_id',
        allowNull: false
    }
});
// FOREIGN KEYS for Carro_det table
Carro_cab.hasMany(Carro_det, {
    foreignKey: {
        name: 'carro_det_cab_id',
        allowNull: false
    }
});
Stock.hasMany(Carro_det, {
    foreignKey: {
        name: 'carro_det_stock_id',
        allowNull: false
    }
});
// FOREIGN KEYS for Pedido_cab table
Propietario.hasMany(Pedido_cab, {
    foreignKey: {
        name: 'ped_comprador_id',
        allowNull: false
    }
});

// FOREIGN KEYS for Pedido_det table
Pedido_cab.hasMany(Pedido_det, {
    foreignKey: {
        name: 'ped_det_cab_id',
        allowNull: false
    }
});
Stock.hasMany(Pedido_det, {
    foreignKey: {
        name: 'ped_det_stock_id',
        allowNull: false
    }
});

// FOREIGN KEYS for Stock table
Repuesto.hasMany(Stock, {
    foreignKey: {
        name: 'stock_repuesto_id',
        allowNull: false
    }
});
Proveedor.hasMany(Stock, {
    foreignKey: {
        name: 'stock_prov_id',
        allowNull: false
    }
});



