require ("dotenv").config()//importando dotenv
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//importando mongoose y cors
const mongoose = require ("mongoose");
const cors = require ("cors");
//conectando con mongoose
mongoose.connect(process.env.DB_PROD,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
  
.then((x)=>{
  console.log(`Connect to Mongo! Database name: "${x.connections[0].name}"`)
}).catch((err)=>{
  console.log("Error connecting to mongo", err)
})


const app = express();

//agregando cors para permisos a otras apps

app.use(
  cors({
      origin:["http:localhost:3001","https://www.paginaDeploy.com"], //DUDA que pagina usar?
      credentials:true
  })
)


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);




module.exports = app;
