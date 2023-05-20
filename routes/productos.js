const productos = require('express').Router();
const db = require('../database/db');

productos.post('/', (req,res)=>{
    const {nombre,precio} = req.body
    db.query(`call guardar_producto("${nombre.toUpperCase()}",${precio})`,(err,result)=>{
            if(err){
                res.status(500).json({message:err.message});
            }else{
                res.status(200).json(result);
            }
    });

})



productos.get('/',(req,res)=>{
    db.query(`SELECT * FROM productos   `,(err,result)=>{
        if(err){
            res.status(500).json({message:err,message})
        }else{
            res.status(200).json(result)
        }
    })
})



productos.delete('/:id', (req,res)=>{
    const id = req.params.id
    db.query(`DELETE FROM productos WHERE id_producto = ${id}`,(err,result)=>{
            if(err){
                res.status(500).json({message:err.message});
            }else{
                res.status(200).json(result);
            }
    });

})


module.exports = productos;