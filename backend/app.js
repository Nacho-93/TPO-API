//Express
var express = require('express');
var cookieParser = require('cookie-parser');
var bluebird = require('bluebird');
var morgan = require('morgan');

//incorporo cors
var cors = require('cors');

//importo router
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api'); //Custom

//instancio el servidor
var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Habilitar CORS para todos los orígenes

app.use(cookieParser());


//Indico las rutas de los endpoint
app.use('/api', apiRouter);
app.use('/', indexRouter);


//onsole.log("processENV",process.env);
if (process.env.NODE_ENV === 'Development') {
  require('./config').config();
}


//Database connection --
var mongoose = require('mongoose')
mongoose.Promise = bluebird;
let url = `${process.env.DATABASE1}${process.env.DATABASE2}=${process.env.DATABASE3}=${process.env.DATABASE4}`

let opts = {
  useNewUrlParser : true, 
  connectTimeoutMS:20000, 
  useUnifiedTopology: true
  };


mongoose.connect(url,opts)
  .then(() => {
    console.log(url)
    console.log(`Succesfully Connected to theMongodb Database..`)
  })
  .catch((e) => {
    console.log(`Error Connecting to the Mongodb Database...`),
    console.log(e)
  })


// Setup server port
var port = process.env.PORT || 8080;
// Escuchar en el puerto
app.listen(port,()=>{
    console.log('Servidor de ABM Users iniciado en el puerto ',port);
});


module.exports = app;