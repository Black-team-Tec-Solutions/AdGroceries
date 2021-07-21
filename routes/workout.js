const express = require('express');
const router = express.Router();
const WorkOut = require("../models/WorkOut")

router.post("/create-workout",(req, res)=>{
    const {name} = req.body
    WorkOut.create({name,exercises,typeExcercise})
    .then(workout=>{
        res.status(200).json({result:workout})
    })
    .catch(error => res.status(400).json({error}))
    // sacar el body de el request
    // poner los datos al modelo
    // regresar el ejercicio creado
    // fin
   
})

router.delete("/delete-workout:workout_id",(req, res)=>{
    const {workout_id} = req.params
    WorkOut.findByIdAndUpdate(workout_id)
    // scar el id del ejercicio
    // bifurcacion seria crear un delete para todos el work
    // y crear un delete por ejercicio individual
    res.status(200).json({msj:"ejercicio eliminado"})
})

router.get("/get-workout", async (req, res)=>{
    const {id}= req.params
    //quien es mi usuario como admin si traigo todos
    // como user solo los mios !!
    // traer todfos los work que pertenezcan a mi user
    const workOuts = Workout.find({})
    .then( res=>{
        console.log(res)
        res.status(200).json(workOuts)
    })
    .catch(err => {
        console.log(err)
        handleErrors(error)
    })
     /* try{
      const w = await Workout.find({})
      return w res.status.json({w})
     } catch(error){
  const errors =  handleErrors(error)
  res.status(400).json(errors)
     } */
})

router.patch("/update-workout",(req, res)=>{
    // modificar los ejercicios
    res.status(200).json({msj:"ejercicio actualizado"})
})



module.exports =router