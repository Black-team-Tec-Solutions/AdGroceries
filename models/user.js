const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const movieSchema = new Schema({
  title:{
    type: String,
    unique:[true, "This movie already exist"]
  },
  genre:String,
  plot:String,
  _cast: [{ type: Schema.Types.ObjectId, ref: "Celeb"}]
}, {timestamps: true});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
