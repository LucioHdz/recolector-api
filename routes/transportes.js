const transportes = require('express').Router();


const db = require('../database/db');

transportes.post('/', (req,res)=>{
    const {nombre,max_carga} = req.body
    db.query(`INSERT INTO transportes VALUE (DEFAULT,"${nombre.toUpperCase()}",${max_carga})`,(err,result)=>{
            if(err){
                res.status(500).json({message:err.message});
            }else{
                res.status(200).json(result);
            }
    });

})



transportes.get('/',(req,res)=>{
    db.query(`SELECT * FROM transportess`,(err,result)=>{
        if(err){
            res.status(500).json({message:err.message})
        }else{
            res.status(200).json(result)
        }
    })
})



transportes.delete('/:id', (req,res)=>{
    const id = req.params.id
    db.query(`DELETE FROM transportes WHERE id_transporte = ${id}`,(err,result)=>{
            if(err){
                res.status(500).json({message:err.message});
            }else{
                res.status(200).json(result);
            }
    });

})



module.exports=transportes;