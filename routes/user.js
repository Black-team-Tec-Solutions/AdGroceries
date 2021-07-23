const express = require('express');
const router = express.Router();
const User = require ("../models/User")
const {checkRole,veryToken} = require("../util/auth-mid")




router.get('/user', veryToken,checkRole(["ADMIN"]),(req,res,next) =>{
  User.find({$nor:[{role:"ADMIN"}]})
  .then(users=>{
    res.status(200).json({result:users})
  })
  .catch(error => res.status(400).json({error}))
});

router.patch("/editUser", veryToken,(req,res)=>{

   const{_id } = req.user
   const {role,...restUser} =  req.body
   User.findByIdAndUpdate(_id,restUser,{new:true})
   .then(user =>{
     res.status(200).json({result:user})
   })
   .catch(error =>res.status(400).json({error}))
})


module.exports = router;
