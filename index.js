const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usuarios = require('./routes/usuarios');
const productos = require('./routes/productos');
const transportes = require('./routes/transportes');
const pedidos = require('./routes/pedidos');


const app = express();

// Configurar body-parser para que convierta el cuerpo de las solicitudes a JSON
app.use(bodyParser.json());
app.use(cors());

app.listen(3030, ()=>console.log('Servidor corriendo'));



app.use('/usuarios', usuarios)
app.use('/productos', productos)
app.use('/transportes', transportes)
app.use('/pedidos', pedidos)