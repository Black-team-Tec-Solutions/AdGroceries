const express = require('express');
const router = express.Router();
const WorkOut = require("../models/WorkOut")

router.post("/create-workout",(req, res)=>{
    const {name, exercises, typeexcercise} = req.body
    console.log(req.body)
    const workout = {name, exercises, typeexcercise}
    console.log(name, exercises, typeexcercise )
    WorkOut.create(workout)
    .then(workout=>{
       res.status(200).json({result:workout})
     })
    .catch(error => res.status(400).json({error})) 
    // sacar el body de el request
    // poner los datos al modelo
    // regresar el ejercicio creado
    // fin
   
})

router.delete("/delete-workout/:workout_id",(req, res)=>{
    const {workout_id} = req.params
    console.log("mi id",workout_id)
    WorkOut.deleteOne({"_id":workout_id})
    .then(() =>{
        res.status(200).json({msj:"ejercicio eliminado"})
    })
    .catch(error => res.status(400).json({error})) 
    // scar el id del ejercicio
    // bifurcacion seria crear un delete para todos el work
    // y crear un delete por ejercicio individual
    
})

router.get("/get-workout", (req, res)=>{
    const {id}= req.params
    //quien es mi usuario como admin si traigo todos
    // como user solo los mios !!
    // traer todfos los work que pertenezcan a mi user
    WorkOut.find({})
    .then( workouts =>{
        console.log(workouts)
        res.status(200).json(workouts)
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

router.patch("/update-workout/:workout_id",(req, res)=>{
    // modificar los ejercicios
    const {workout_id} = req.params
    console.log("este es el id", workout_id)
    WorkOut.findByIdAndUpdate(workout_id, req.body, {new:true})
    .then(updateworkout =>{
        res.status(200).json({result:updateworkout})
    })
    .catch(error => res.status(400).json({error}))
    
})



module.exports = router