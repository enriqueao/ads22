// Se llama a express y se asigna a la constante express
const express = require("express");

//cargamos el body-parser
const bodyParser = require('body-parser');

//Se reasigna express a app
const app = express();

//cargamos morgan
const morgan = require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/* 
   Inicializamos body parser en nuestra app, gracias a body-parser podremos manejar los datos 
   en formato JSON de la recepción en POST/PUT desde el cliente,
   es decir, que, cuando el cliente haga una petición, 
   indicará la cabecera Content-Type: application/json 
   y nuestra API va a servir esta petición ejecutando lo que el cliente necesita
*/
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


/* 
    Creamos la variable usuario para tener sus propiedades previamente 
    asignadas de forma global, así como una variable llamada respuesta 
    que nos permitirá enviar una respuesta hacia el cliente.
*/    

//Routes
app.use(require('./routes/index'));
app.use('/api/asentamientos', require('./routes/asentamientos'));
app.use('/utils', require('./routes/utils'));
app.use(function(req, res, next) {
  respuesta = {
   error: true, 
   codigo: 404, 
   mensaje: 'URL no encontrada',
   data: null
  };
  res.status(404).send(respuesta);
 });   

   
//Se pasan parametros y se inicializa el servidor
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
}
);

