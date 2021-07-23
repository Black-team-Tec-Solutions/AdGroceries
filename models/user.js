//import mongoose y destructurar

const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const userSchema = new Schema({
    nombre:{
        type: String,
        required:[true,"debes agregar un nombre"],
        minlength:1,
    },
    email:{
        type: String,
        unique:[true,"ya existe este correo electronico"],
        required:[true,"debes agregar un nombre"],
    },
    password:{
        type: String,
        required:[true,"debes agregar una contraseña"]
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER",
    },
    stage:{
        type:Number,
        default:0,

    }

},{timestamps:true})

                  //model("elnombrecomo exportamoselmodelo",estructura)
module.exports = model("User",userSchema)
