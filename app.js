const express = require('express');
const cors = require('cors')
const jwt = require('jsonwebtoken');
const { sequelize,
    Carro_cab,
    Carro_det,
    Comuna,
    Intentologin,
    Pais,
    Pedido_cab,
    Pedido_det,
    Perfil,
    Propietario,
    Proveedor,
    Region,
    Repuesto,
    Sesion,
    Stock,
    User,
    Vehiculo } = require('./models');

const dotenv = require('dotenv');
// get config vars
dotenv.config();

function generateAccessToken(userid) {
    console.log(userid);
    console.log(process.env.TOKEN_SECRET);
    return jwt.sign(userid, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}



const app = express();
app.use(cors());



app.use(express.json());
//-------------------------------------------------------------------------------------------
// Carro_cab CRUD
app.post('/carros/cab', async (req, res) => {
    const { prop_id } = req.body;
    try {
        const carro = await Carro_cab.create({ prop_id })
        return res.json(carro);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/carros/cab', async (req, res) => {
    const prop_id = req.params.prop_id;
    try {
        const carros = await Carro_cab.findAll();
        return res.json(carros);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/carros/cab/:prop_id', async (req, res) => {
    const prop_id = req.params.prop_id;
    try {
        const carro = await Carro_cab.findOne({
            where: { prop_id }
        });
        return res.json(carro);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/carros/cab/:prop_id', async (req, res) => {
    const prop_id = req.params.prop_id;
    try {
        const carro = await Carro_cab.findOne({ where: { prop_id } });
        await carro.destroy();
        return res.json({ message: 'Carro deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/carros/cab/:prop_id', async (req, res) => {

    const prop_id = req.params.prop_id;
    //const { prop_id } = req.body;

    try {
        const carro = await Carro_cab.findOne({ where: { prop_id } });
        carro.prop_id = prop_id;

        await carro.save();
        return res.json(carro);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
//-------------------------------------------------------------------------------------------
// Carro_det CRUD
app.post('/carros/det', async (req, res) => {
    const { cab_id, correlativo,
        stock_id, fec_vig,
        repuesto_id, num_parte,
        cant, precio_unitario } = req.body;


    try {
        const carro_det = await Carro_det.create({
            cab_id,
            correlativo,
            stock_id,
            fec_vig,
            repuesto_id,
            num_parte,
            cant,
            precio_unitario
        })
        return res.json(carro_det);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/carros/det', async (req, res) => {
    try {
        const carro_det = await Carro_det.findAll();
        return res.json(carro_det);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/carros/det/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const carro_det = await Carro_det.findOne({
            where: { id }
        });
        return res.json(carro_det);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/carros/det/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const carro_det = await Carro_det.findOne({ where: { id } });
        await carro_det.destroy();
        return res.json({ message: 'Item del Carro deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/carros/det/:id', async (req, res) => {
    const id = req.params.id;
    const { cab_id, correlativo,
        stock_id, fec_vig,
        repuesto_id, num_parte,
        cant, precio_unitario } = req.body;

    try {
        const carro_det = await Carro_det.findOne({ where: { id } });
        carro_det.cab_id = cab_id;
        carro_det.correlativo = correlativo;
        carro_det.stock_id = stock_id;
        carro_det.fec_vig = fec_vig;
        carro_det.repuesto_id = repuesto_id;
        carro_det.num_parte = num_parte;
        carro_det.cant = cant;
        carro_det.precio_unitario = precio_unitario

        await carro_det.save();
        return res.json(carro_det);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Comuna CRUD
app.post('/comunas', async (req, res) => {
    const { region_id, nombre } = req.body;
    try {
        const comuna = await Comuna.create({ region_id, nombre })
        return res.json(comuna);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/comunas', async (req, res) => {
    try {
        const comunas = await Comuna.findAll();
        return res.json(comunas);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/comunas/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const comuna = await Comuna.findOne({
            where: { id }
        });
        return res.json(comuna);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/comunas/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const comuna = await Comuna.findOne({ where: { id } });
        await comuna.destroy();
        return res.json({ message: 'Comuna deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/comunas/:id', async (req, res) => {
    const id = req.params.id;
    const { region_id, nombre } = req.body;

    try {
        const comuna = await Comuna.findOne({ where: { id } });
        comuna.region_id = region_id;
        comuna.nombre = nombre;

        await comuna.save();
        return res.json(comuna);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Intentologin CRUD
app.post('/intentos', async (req, res) => {
    const { user_id, fecha_hora, ip_address, exito } = req.body;

    try {
        const intento = await Intentologin.create({ user_id, fecha_hora, ip_address, exito })
        return res.json(intento);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/intentos', async (req, res) => {
    try {
        const intentos = await Intentologin.findAll();
        return res.json(intentos);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/intentos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const intento = await Intentologin.findOne({
            where: { id }
        });
        return res.json(intento);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/intentos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const intento = await Intentologin.findOne({ where: { id } });
        await intento.destroy();
        return res.json({ message: 'Intento de login deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/intentos/:id', async (req, res) => {
    const id = req.params.id;
    const { user_id, fecha_hora, ip_address, exito } = req.body;

    try {
        const intento = await Intentologin.findOne({ where: { id } });
        intento.user_id = user_id;
        intento.fecha_hora = fecha_hora;
        intento.ip_address = ip_address;
        intento.exito = exito;

        await intento.save();
        return res.json(intento);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// País CRUD
app.post('/paises', async (req, res) => {
    const { abrev, nombre } = req.body;
    try {
        const pais = await Pais.create({ abrev, nombre })
        return res.json(pais);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/paises', async (req, res) => {
    try {
        const paises = await Pais.findAll();
        return res.json(paises);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/paises/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const pais = await Pais.findOne({
            where: { id }
        });
        return res.json(pais);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/paises/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const pais = await Pais.findOne({ where: { id } });
        await pais.destroy();
        return res.json({ message: 'Pais deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/paises/:id', async (req, res) => {
    const id = req.params.id;
    const { abrev, nombre } = req.body;

    try {
        const pais = await Pais.findOne({ where: { id } });
        pais.abrev = abrev;
        pais.nombre = nombre;

        await pais.save();
        return res.json(pais);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Pedido_cab CRUD
app.post('/pedidos/cab', async (req, res) => {
    const { num,
        estado,
        fecha,
        comprador_id,
        neto,
        iva,
        total,
        fact_calle,
        fact_num,
        fact_block_depto,
        fact_pais_id,
        fact_region_id,
        fact_comuna_id,
        desp_calle,
        desp_num,
        desp_block_depto,
        desp_pais_id,
        desp_region_id,
        desp_comuna_id,
        desp_geo_long,
        desp_geo_lat,
        fono_pais,
        fono_zona,
        fono_num } = req.body;

    try {
        const pedido = await Pedido_cab.create({
            num,
            estado,
            fecha,
            comprador_id,
            neto,
            iva,
            total,
            fact_calle,
            fact_num,
            fact_block_depto,
            fact_pais_id,
            fact_region_id,
            fact_comuna_id,
            desp_calle,
            desp_num,
            desp_block_depto,
            desp_pais_id,
            desp_region_id,
            desp_comuna_id,
            desp_geo_long,
            desp_geo_lat,
            fono_pais,
            fono_zona,
            fono_num
        })
        return res.json(pedido);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/pedidos/cab', async (req, res) => {
    try {
        const pedidos = await Pedido_cab.findAll();
        return res.json(pedidos);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/pedidos/cab/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const pedido = await Pedido_cab.findOne({
            where: { id }
        });
        return res.json(pedido);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/pedidos/cab/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const pedido = await Pedido_cab.findOne({ where: { id } });
        await pedido.destroy();
        return res.json({ message: 'Pedido deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/pedidos/cab/:id', async (req, res) => {
    const id = req.params.id;
    const { num,
        estado,
        fecha,
        comprador_id,
        neto,
        iva,
        total,
        fact_calle,
        fact_num,
        fact_block_depto,
        fact_pais_id,
        fact_region_id,
        fact_comuna_id,
        desp_calle,
        desp_num,
        desp_block_depto,
        desp_pais_id,
        desp_region_id,
        desp_comuna_id,
        desp_geo_long,
        desp_geo_lat,
        fono_pais,
        fono_zona,
        fono_num } = req.body;

    try {
        const pedido = await Pedido_cab.findOne({ where: { id } });
        pedido.num = num;
        pedido.estado = estado;
        pedido.fecha = fecha;
        pedido.comprador_id = comprador_id;
        pedido.neto = neto;
        pedido.iva = iva;
        pedido.total = total;
        pedido.fact_calle = fact_calle;
        pedido.fact_num = fact_num;
        pedido.fact_block_depto = fact_block_depto;
        pedido.fact_pais_id = fact_pais_id;
        pedido.fact_region_id = fact_region_id;
        pedido.fact_comuna_id = fact_comuna_id;
        pedido.desp_calle = desp_calle;
        pedido.desp_num = desp_num;
        pedido.desp_block_depto = desp_block_depto;
        pedido.desp_pais_id = desp_pais_id;
        pedido.desp_region_id = desp_region_id;
        pedido.desp_comuna_id = desp_comuna_id;
        pedido.desp_geo_long = desp_geo_long;
        pedido.desp_geo_lat = desp_geo_lat;
        pedido.fono_pais = fono_pais;
        pedido.fono_zona = fono_zona;
        pedido.fono_num = fono_num;

        await pedido.save();
        return res.json(pedido);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Pedido_det CRUD
app.post('/pedidos/det', async (req, res) => {
    const { cab_id,
        item_num,
        stock_id,
        nro_parte,
        descripcion,
        cantidad,
        precio,
        um_vta,
        tot_item,
        um_desp } = req.body;
    try {
        const item = await Pedido_det.create({
            cab_id,
            item_num,
            stock_id,
            nro_parte,
            descripcion,
            cantidad,
            precio,
            um_vta,
            tot_item,
            um_desp
        })
        return res.json(item);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/pedidos/det', async (req, res) => {
    try {
        const itemes = await Pedido_det.findAll();
        return res.json(itemes);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/pedidos/det/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const item = await Pedido_det.findOne({
            where: { id }
        });
        return res.json(item);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/pedidos/det/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const item = await Pedido_det.findOne({ where: { id } });
        await item.destroy();
        return res.json({ message: 'Item deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/pedidos/det/:id', async (req, res) => {
    const id = req.params.id;
    const { cab_id,
        item_num,
        stock_id,
        nro_parte,
        descripcion,
        cantidad,
        precio,
        um_vta,
        tot_item,
        um_desp } = req.body;

    try {
        const item = await Pedido_det.findOne({ where: { id } });
        item.cab_id = cab_id;
        item.item_num = item_num;
        item.stock_id = stock_id;
        item.nro_parte = nro_parte;
        item.descripcion = descripcion;
        item.cantidad = cantidad;
        item.precio = precio;
        item.um_vta = um_vta;
        item.tot_item = tot_item;
        item.um_desp = um_desp;

        await item.save();
        return res.json(item);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Perfil CRUD
app.post('/perfiles', async (req, res) => {
    const { desc } = req.body;
    try {
        const perfil = await Perfil.create({ desc })
        return res.json(perfil);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/perfiles', async (req, res) => {
    try {
        const perfiles = await Perfil.findAll();
        return res.json(perfiles);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/perfiles/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const perfil = await Perfil.findOne({
            where: { id }
        });
        return res.json(perfil);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/perfiles/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const perfil = await Perfil.findOne({ where: { id } });
        await perfil.destroy();
        return res.json({ message: 'Perfil deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/perfiles/:id', async (req, res) => {
    const id = req.params.id;
    const { desc } = req.body;

    try {
        const perfil = await Perfil.findOne({ where: { id } });
        perfil.desc = desc;

        await perfil.save();
        return res.json(perfil);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Propietario CRUD
app.post('/propietarios', async (req, res) => {
    const { rut_num,
        rut_dig,
        nombres,
        apellidos,
        fact_calle,
        fact_num,
        fact_block_depto,
        fact_pais_id,
        fact_region_id,
        fact_comuna_id,
        desp_calle,
        desp_num,
        desp_block_depto,
        desp_pais_id,
        desp_region_id,
        desp_comuna_id,
        desp_geo_long,
        desp_geo_lat,
        fono_pais,
        fono_zona,
        fono_num } = req.body;
    try {
        const propietario = await Propietario.create({
            rut_num,
            rut_dig,
            nombres,
            apellidos,
            fact_calle,
            fact_num,
            fact_block_depto,
            fact_pais_id,
            fact_region_id,
            fact_comuna_id,
            desp_calle,
            desp_num,
            desp_block_depto,
            desp_pais_id,
            desp_region_id,
            desp_comuna_id,
            desp_geo_long,
            desp_geo_lat,
            fono_pais,
            fono_zona,
            fono_num
        })
        return res.json(propietario);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/propietarios', async (req, res) => {
    try {
        const propietarios = await Propietario.findAll();
        return res.json(propieatrios);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/propietarios/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const propietario = await Propietario.findOne({
            where: { id }
        });
        return res.json(propietario);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/propietarios/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const propietario = await Propietario.findOne({ where: { id } });
        await propietario.destroy();
        return res.json({ message: 'Propietario deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/propietarios/:id', async (req, res) => {
    const id = req.params.id;
    const { rut_num,
        rut_dig,
        nombres,
        apellidos,
        fact_calle,
        fact_num,
        fact_block_depto,
        fact_pais_id,
        fact_region_id,
        fact_comuna_id,
        desp_calle,
        desp_num,
        desp_block_depto,
        desp_pais_id,
        desp_region_id,
        desp_comuna_id,
        desp_geo_long,
        desp_geo_lat,
        fono_pais,
        fono_zona,
        fono_num } = req.body;

    try {
        const propietario = await Propietario.findOne({ where: { id } });
        propietario.rut_num = rut_num;
        propietario.rut_dig = rut_dig;
        propietario.nombres = nombres;
        propietario.apellidos = apellidos;
        propietario.fact_calle = fact_calle;
        propietario.fact_num = fact_num;
        propietario.fact_block_depto = fact_block_depto;
        propietario.fact_pais_id = fact_pais_id;
        propietario.fact_region_id = fact_region_id;
        propietario.fact_comuna_id = fact_comuna_id;
        propietario.desp_calle = desp_calle;
        propietario.desp_num = desp_num;
        propietario.desp_block_depto = desp_block_depto;
        propietario.desp_pais_id = desp_pais_id;
        propietario.desp_region_id = desp_region_id;
        propietario.desp_comuna_id = desp_comuna_id;
        propietario.desp_geo_long = desp_geo_long;
        propietario.desp_geo_lat = desp_geo_lat;
        propietario.fono_pais = fono_pais;
        propietario.fono_zona = fono_zona;
        propietario.fono_num = fono_num;

        await propietario.save();
        return res.json(propietario);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Proveedor CRUD
app.post('/proveedores', async (req, res) => {
    const { rut_num,
        rut_dig,
        razon_social,
        dir_calle,
        dir_numero,
        dir_block_depto,
        dir_pais_id,
        dir_region_id,
        dir_comuna_id,
        fono_pais,
        fono_zona,
        fono_num } = req.body;
    try {
        const proveedor = await Proveedor.create({
            rut_num,
            rut_dig,
            razon_social,
            dir_calle,
            dir_numero,
            dir_block_depto,
            dir_pais_id,
            dir_region_id,
            dir_comuna_id,
            fono_pais,
            fono_zona,
            fono_num
        })
        return res.json(proveedor);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/proveedores', async (req, res) => {
    try {
        const proveedores = await Proveedor.findAll();
        return res.json(proveedores);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/proveedores/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const proveedor = await Proveedor.findOne({
            where: { id }
        });
        return res.json(proveedor);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/proveedores/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const proveedor = await Proveedor.findOne({ where: { id } });
        await proveedor.destroy();
        return res.json({ message: 'Proveedor deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/proveedores/:id', async (req, res) => {
    const id = req.params.id;
    const { rut_num,
        rut_dig,
        razon_social,
        dir_calle,
        dir_numero,
        dir_block_depto,
        dir_pais_id,
        dir_region_id,
        dir_comuna_id,
        fono_pais,
        fono_zona,
        fono_num } = req.body;

    try {
        const proveedor = await Proveedor.findOne({ where: { id } });
        proveedor.rut_num = rut_num;
        proveedor.rut_dig = rut_dig;
        proveedor.razon_social = razon_social;
        proveedor.dir_calle = dir_calle;
        proveedor.dir_numero = dir_numero;
        proveedor.dir_block_depto = dir_block_depto;
        proveedor.dir_pais_id = dir_pais_id;
        proveedor.dir_region_id = dir_region_id;
        proveedor.dir_comuna_id = dir_comuna_id;
        proveedor.fono_pais = fono_pais;
        proveedor.fono_zona = fono_zona;
        proveedor.fono_num = fono_num;


        await proveedor.save();
        return res.json(proveedor);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Región CRUD
app.post('/regiones', async (req, res) => {
    const { pais_id, abrev, nombre } = req.body;
    try {
        const region = await Region.create({ pais_id, abrev, nombre })
        return res.json(region);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/regiones', async (req, res) => {
    try {
        const regiones = await Region.findAll();
        return res.json(regiones);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/regiones/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const region = await Region.findOne({
            where: { id }
        });
        return res.json(region);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/regiones/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const region = await Region.findOne({ where: { id } });
        await region.destroy();
        return res.json({ message: 'Región deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/regiones/:id', async (req, res) => {
    const id = req.params.id;
    const { pais_id, abrev, nombre } = req.body;

    try {
        const region = await Region.findOne({ where: { id } });
        region.pais_id = pais_id;
        region.abrev = abrev;
        region.nombre = nombre;

        await region.save();
        return res.json(region);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Repuesto CRUD
app.post('/repuestos', async (req, res) => {
    const { num_parte, desc } = req.body;
    try {
        const repuesto = await Repuesto.create({ num_parte, desc })
        return res.json(repuesto);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/repuestos', async (req, res) => {
    try {
        const repuestos = await Repuesto.findAll();
        return res.json(repuestos);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/repuestos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const repuesto = await Repuesto.findOne({
            where: { id }
        });
        return res.json(repuesto);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/repuestos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const repuesto = await Repuesto.findOne({ where: { id } });
        await repuesto.destroy();
        return res.json({ message: 'Repuesto deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/repuestos/:id', async (req, res) => {
    const id = req.params.id;
    const { num_parte, desc } = req.body;

    try {
        const repuesto = await Repuesto.findOne({ where: { id } });
        repuesto.num_parte = num_parte;
        repuesto.desc = desc;

        await repuesto.save();
        return res.json(repuesto);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Sesion CRUD
app.post('/sesiones', async (req, res) => {
    const { user_id, inicio, fin } = req.body;
    try {
        const tok = "1"; //generateAccessToken({ userid: req.body.user_id });
        console.log(tok);
        const sesion = await Sesion.create({ user_id, inicio, fin, tok });
        return res.json(sesion);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/sesiones', async (req, res) => {
    try {
        const sesiones = await Sesion.findAll();
        return res.json(sesiones);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/sesiones/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const sesion = await Sesion.findOne({
            where: { id }
        });
        return res.json(sesion);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/sesiones/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const sesion = await Sesion.findOne({ where: { id } });
        await sesion.destroy();
        return res.json({ message: 'Sesion deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/sesiones/:id', async (req, res) => {
    const id = req.params.id;
    const { user_id, inicio, fin, token } = req.body;

    try {
        const sesion = await Sesion.findOne({ where: { id } });
        sesion.user_id = user_id;
        sesion.inicio = inicio;
        sesion.fin = fin;
        sesion.token = token;

        await sesion.save();
        return res.json(sesion);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})

//-------------------------------------------------------------------------------------------
// Stock CRUD
app.post('/stocks', async (req, res) => {
    const { prov_id,
        fec_vig,
        repuesto_id,
        num_parte,
        desc_parte,
        um_vta,
        precio_uni,
        um_desp,
        onhand,
        encarrito,
        enpedido,
        disponible } = req.body;
    try {
        const stock = await Stock.create({
            prov_id,
            fec_vig,
            repuesto_id,
            num_parte,
            desc_parte,
            um_vta,
            precio_uni,
            um_desp,
            onhand,
            encarrito,
            enpedido,
            disponible
        })
        return res.json(stock);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/stocks', async (req, res) => {
    try {
        const stocks = await Stock.findAll();
        return res.json(stocks);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/stocks/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const stock = await Stock.findOne({
            where: { id }
        });
        return res.json(stock);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/stocks/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const stock = await Stock.findOne({ where: { id } });
        await stock.destroy();
        return res.json({ message: 'Stock deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/stocks/:id', async (req, res) => {
    const id = req.params.id;
    const { prov_id,
        fec_vig,
        repuesto_id,
        num_parte,
        desc_parte,
        um_vta,
        precio_uni,
        um_desp,
        onhand,
        encarrito,
        enpedido,
        disponible } = req.body;

    try {
        const stock = await Stock.findOne({ where: { id } });
        stock.prov_id = prov_id;
        stock.fec_vig = fec_vig;
        stock.repuesto_id = repuesto_id;
        stock.num_parte = num_parte;
        stock.desc_parte = desc_parte;
        stock.um_vta = um_vta;
        stock.precio_uni = precio_uni;
        stock.um_desp = um_desp;
        stock.onhand = onhand;
        stock.encarrito = encarrito;
        stock.enpedido = enpedido;
        stock.disponible = disponible;

        await stock.save();
        return res.json(stock);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
//-------------------------------------------------------------------------------------------
// User CRUD
app.post('/users', async (req, res) => {
    const { username, password, perfil, email } = req.body;
    try {
        const user = await User.create({ username, password, perfil, email })
        return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/users', authenticateToken, async (req, res) => {
    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOne({
            where: { id }
        });
        return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findOne({ where: { id } });
        await user.destroy();
        return res.json({ message: 'User deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const { username, password, perfil, email } = req.body;

    try {
        const user = await User.findOne({ where: { id } });
        user.username = username;
        user.password = password;
        user.perfil = perfil;
        user.email = email;

        await user.save();
        return res.json(user);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
//-------------------------------------------------------------------------------------------
// Vehículo CRUD
app.post('/vehiculos', async (req, res) => {
    const { propietario_id,
        vin,
        placa_patente,
        marca,
        modelo,
        year,
        motor_num } = req.body;
    try {
        const vehiculo = await Vehiculo.create({
            propietario_id,
            vin,
            placa_patente,
            marca,
            modelo,
            year,
            motor_num
        })
        return res.json(vehiculo);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})
app.get('/vehiculos', async (req, res) => {
    try {
        const vehiculos = await Vehiculo.findAll();
        return res.json(vehiculos);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.get('/vehiculos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const vehiculo = await Vehiculo.findOne({
            where: { id }
        });
        return res.json(vehiculo);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.delete('/vehiculos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const vehiculo = await Vehiculo.findOne({ where: { id } });
        await vehiculo.destroy();
        return res.json({ message: 'Vehiculo deleted!' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.put('/vehiculos/:id', async (req, res) => {
    const id = req.params.id;
    const { propietario_id,
        vin,
        placa_patente,
        marca,
        modelo,
        year,
        motor_num } = req.body;

    try {
        const vehiculo = await Vehiculo.findOne({ where: { id } });
        vehiculo.propietario_id = propietario_id;
        vehiculo.vin = vin;
        vehiculo.placa_patente = placa_patente;
        vehiculo.marca = marca;
        vehiculo.modelo = modelo;
        vehiculo.year = year;
        vehiculo.motor_num = motor_num;

        await vehiculo.save();
        return res.json(vehiculo);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Something went wrong!' });
    }
})
app.listen({ port: 5000 }, async () => {
    console.log('Server up on http://localhost:5000');
    await sequelize.authenticate();
    console.log('Database connected!');
})
