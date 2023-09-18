const express = require('express');
const sequelize = require('./sequelize');
const User = require('./models/User'); // Ajusta la ruta según tu estructura de carpetas

const app = express();



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

