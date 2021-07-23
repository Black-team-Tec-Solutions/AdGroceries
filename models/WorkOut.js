const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const workoutSchema = new Schema({
    exercises:{
        type: [String],     
    },
    typeexcercise:{
        type:String,
        required: true,
        enum: ["TREN SUPERIOR", "TREN INFERIOR", "CARDIO HIT"]
    },
    name:{
        type:String
    },
    _user:{
        type: Schema.Types.ObjectId,
        ref:"User"
        },

},{timestamps:true})

                  //model("elnombrecomo exportamoselmodelo",estructura)
module.exports = model("Workout", workoutSchema)