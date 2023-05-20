const usuarios = require('express').Router();
const db = require('../database/db');

usuarios.post('/registrar', (req,res)=>{
    const {usuario,password} = req.body
    db.query(`call agregar_usuario("${usuario}","${password}",2)`,(err,result)=>{
            if(err){
                res.status(500).json({message:err.message});
            }else{
                res.status(200).json(result);
            }
    });

})



usuarios.post('/buscar',(req,res)=>{
    const {usuario,contrasena} = req.body;
    db.query(`call buscar_usuario("${usuario}","${contrasena}")`,(err,result)=>{
        if(err){
            res.status(500).json({message:err,message})
        }else{
            res.status(200).json(result)
        }
    })
})




module.exports = usuarios;