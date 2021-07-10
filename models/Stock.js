const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const stockSchema = new Schema({
    products:{
        type: [{}],     
    },
    _user:{
        type: Schema.Types.ObjectId,
        ref:"User"
        },

},{timestamps:true})

                  //model("elnombrecomo exportamoselmodelo",estructura)
module.exports = model("Stock",stockSchema)
