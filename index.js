const express = require('express');
const Sequelize = require('sequelize');

const app = express();

// Configura la conexión a la base de datos MySQL
const sequelize = new Sequelize('dbtest', 'admin', 'masterTFM', {
    host: 'db-autoparts.cssymwvopatw.us-east-1.rds.amazonaws.com', // Cambia esto al host de tu base de datos si es necesario
    dialect: 'mysql',
    port: 3306, // Cambia esto al puerto de tu base de datos si es necesario
});

// Verifica si la conexión a la base de datos es exitosa
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexión a la base de datos dbtest - MySQL establecida correctamente.');
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });

// Define tus modelos y relaciones Sequelize aquí

// Rutas de tu aplicación Express

app.listen(3000, () => {
    console.log('Servidor Express TFM escuchando en el puerto 3000');
});

