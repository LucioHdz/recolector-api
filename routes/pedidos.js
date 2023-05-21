const pedidos = require('express').Router();

const db = require('../database/db');

pedidos.post('/', (req, res) => {
    const { usuario,
        producto,
        cantidad,
        total,
        fecha,
        transporte,
        contacto } = req.body
    db.query(`INSERT INTO pedidos VALUE (DEFAULT,${usuario},${producto} ,${cantidad}, ${total},${fecha} ,${transporte}, "${contacto}")`, (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(200).json(result);
        }
    });

})



pedidos.get('/', (req, res) => {
    db.query(`SELECT
    pedidos.id_pedido,
    usuarios.nombre_usuario,
    productos.nombre_producto,
    pedidos.cantidad,
    pedidos.total,
    pedidos.fecha_pedido,
    transportes.nombre_transporte,
    pedidos.no_contacto
    FROM
    pedidos
    INNER JOIN usuarios ON pedidos.id_usuario = usuarios.id_usuario
    INNER JOIN productos ON pedidos.id_producto = productos.id_producto
    INNER JOIN transportes ON pedidos.id_transporte = transportes.id_transporte`, (err, result) => {
        if (err) {
            res.status(500).json({ message: err, message })
        } else {
            res.status(200).json(result)
        }
    })
})
pedidos.get('/:id', (req, res) => {
    const {id} = req.params
    db.query(`SELECT
    pedidos.id_pedido,
    usuarios.nombre_usuario,
    productos.nombre_producto,
    pedidos.cantidad,
    pedidos.total,
    pedidos.fecha_pedido,
    transportes.nombre_transporte,
    pedidos.no_contacto
    FROM
    pedidos
    INNER JOIN usuarios ON pedidos.id_usuario = usuarios.id_usuario
    INNER JOIN productos ON pedidos.id_producto = productos.id_producto
    INNER JOIN transportes ON pedidos.id_transporte = transportes.id_transporte where usuarios.id_usuario = ${id}`, (err, result) => {
        if (err) {
            res.status(500).json({ message: err, message })
        } else {
            res.status(200).json(result)
        }
    })

})



pedidos.delete('/:id', (req, res) => {
    const id = req.params.id
    db.query(`DELETE FROM pedidos WHERE id_pedido = ${id}`, (err, result) => {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(200).json(result);
        }
    });

})


module.exports = pedidos;