const { request } = require('express');
const express = require('express');
const Stock = require('../models/Stock');
const router = express.Router();
const User = require ("../models/Stock")
const {checkRole,veryToken} = require("../util/auth-mid")


//enlistar

router.get('/list',veryToken,(req,res)=>{
    const {_id : _owner} = req.user
    Stock.findOne({_user:_owner})
    .then(stock=>{
        res.status(200).json({result:stock})
      })
      .catch(error => res.status(400).json({error}))
    });


router.post('/create',veryToken,(req, res)=>{  
//estamos creando  
const {_id : _owner} = req.user
   Stock.create({...req.body,_owner}) 
   .then(stock=>{
    res.status(200).json({result:stock})
  })
  .catch(error => res.status(400).json({error}))
})    

//estamos actualizando
router.patch("/update",veryToken,(req,res)=>{
    const {_id : _owner} = req.user //la constante se llama igual que le asignamos el nombre en los parametros
    Stock.findOneAndUpdate({_user : _owner},req.body,{new:true})
    .then(updateStock=>{
        res.status(200).json({result:updateStock})
      })
      .catch(error => res.status(400).json({error}))
})



module.exports = router;