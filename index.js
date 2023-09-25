const express = require('express');

const sequelize = require('./db-connection');
const CreatDB = require('./models/CreaDB'); // Ajusta la ruta según tu estructura de carpetas

const app = express();
app.use(express.json());


// Verifica si la conexión a la base de datos es exitosa
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexión a la base de datos dbtest - MySQL establecida correctamente.');
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Modelos sincronizados con la base de datos');
    })
    .catch(err => {
        console.error('Error al sincronizar modelos:', err);
    });
// Define tus modelos y relaciones Sequelize aquí

// Rutas de tu aplicación Express
app.use((req, res, next) => {
    next();
});

// Create a new Perfil
app.post('/perfil', async (req, res) => {
    try {
        const { perfil_id, perfil_desc } = req.body;
        const Perfil = await Perfil.create({ perfil_id, perfil_desc });
        res.status(201).json(Perfil);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all perfiles
app.get('/perfiles', async (req, res) => {
    try {
        const Perfil = await Perfil.findAll();
        res.status(200).json(Perfil);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a single perfil by ID
app.get('/perfiles/:id', async (req, res) => {
    try {
        const Perfil = await Perfil.findByPk(req.params.id);
        if (!Perfil) {
            res.status(404).json({ error: 'Perfil not found' });
        } else {
            res.status(200).json(book);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a perfil by ID
app.put('/perfiles/:id', async (req, res) => {
    try {
        const { perfil_id, perfil_desc } = req.body;
        const Perfil = await Perfil.findByPk(req.params.id);
        if (!Perfil) {
            res.status(404).json({ error: 'Perfil not found' });
        } else {
            Perfil.perfil_id = perfil_id || Perfil.perfil_id;
            Perfil.perfil_desc = perfil_desc || Perfil.perfil_desc;
            await Perfil.save();
            res.status(200).json(book);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a perfil by ID
app.delete('/perfil/:id', async (req, res) => {
    try {
        const Perfil = await Perfil.findByPk(req.params.id);
        if (!Perfil) {
            res.status(404).json({ error: 'Perfil not found' });
        } else {
            await Perfil.destroy();
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`TFM Server is running on port ${PORT}`);
});

//app.listen(3000, () => {
//    console.log('Servidor Express TFM escuchando en el puerto 3000');
//});

