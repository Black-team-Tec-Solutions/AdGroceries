require ("dotenv").config()//importando dotenv

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const PORT = process.env.PORT;

//importando mongoose y cors
const mongoose = require ("mongoose");
const cors = require ("cors");

//conectando con mongoose
mongoose.connect(process.env.DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  
.then((x)=>{
  console.log(`Connect to Mongo! Database name: "${x.connections[0].name} " port: " ${PORT} " `)
}).catch((err)=>{
  console.log("Error connecting to mongo", err)
})


const app = express();

//agregando cors para permisos a otras apps

app.use(
  cors({
      origin:["http://localhost:3000","https://yani666.herokuapp.com/"], 
      credentials:true
  })
)


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const authRouter = require('./routes/auth')
const stockRouter = require('./routes/stock')
const workoutRouter = require('./routes/workout')


app.use('/api', indexRouter);
app.use('/api/auth', authRouter);
app.use('/api/users/', usersRouter);
app.use('/api/stock/', stockRouter);
app.use('/api/workout', workoutRouter);





module.exports = app;
