// Se llama a express y se asigna a la constante express
const express = require("express");

//cargamos el body-parser
const bodyParser = require('body-parser');

//Se reasigna express a app
const app = express();

/* 
   Inicializamos body parser en nuestra app, gracias a body-parser podremos manejar los datos 
   en formato JSON de la recepción en POST/PUT desde el cliente,
   es decir, que, cuando el cliente haga una petición, 
   indicará la cabecera Content-Type: application/json 
   y nuestra API va a servir esta petición ejecutando lo que el cliente necesita
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* 
    Creamos la variable usuario para tener sus propiedades previamente 
    asignadas de forma global, así como una variable llamada respuesta 
    que nos permitirá enviar una respuesta hacia el cliente.
*/    
let usuario = {
    nombre:'',
    apellido: ''
   };

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
   };

//Metodos del Api REST - Get(Obtener), Post(Crear), Put(Actualizar), Delete(Eliminar)
//GET
//Creamos una ruta raíz / que nos permitirá poder mostrar una base de nuestra API.
app.get('/', function(req, res) {
    respuesta = {
     error: true,
     codigo: 200,
     mensaje: 'Punto de inicio'
    };
    res.send(respuesta);
   });

 //Usamos route de express, que nos permite agrupar la misma URL que responderá a distintos métodos  
app.route('/usuario')
  //GET
 .get(function (req, res) {
  respuesta = {
   error: false,
   codigo: 200,
   mensaje: ''
  };
  if(usuario.nombre === '' || usuario.apellido === '') {
   respuesta = {
    error: true,
    codigo: 501,
    mensaje: 'El usuario no ha sido creado'
   };
  } else {
   respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'respuesta del usuario',
    respuesta: usuario
   };
  }
  res.send(respuesta);
 })

  //POST
 .post(function (req, res) {
  if(!req.body.nombre || !req.body.apellido) {
   respuesta = {
    error: true,
    codigo: 502,
    mensaje: 'El campo nombre y apellido son requeridos'
   };
  } else {
   if(usuario.nombre !== '' || usuario.apellido !== '') {
    respuesta = {
     error: true,
     codigo: 503,
     mensaje: 'El usuario ya fue creado previamente'
    };
   } else {
    usuario = {
     nombre: req.body.nombre,
     apellido: req.body.apellido
    };
    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'Usuario creado',
     respuesta: usuario
    };
   }
  }
  
  res.send(respuesta);
 })
  
  //PUT
 .put(function (req, res) {
  if(!req.body.nombre || !req.body.apellido) {
   respuesta = {
    error: true,
    codigo: 502,
    mensaje: 'El campo nombre y apellido son requeridos'
   };
  } else {
   if(usuario.nombre === '' || usuario.apellido === '') {
    respuesta = {
     error: true,
     codigo: 501,
     mensaje: 'El usuario no ha sido creado'
    };
   } else {
    usuario = {
     nombre: req.body.nombre,
     apellido: req.body.apellido
    };
    respuesta = {
     error: false,
     codigo: 200,
     mensaje: 'Usuario actualizado',
     respuesta: usuario
    };
   }
  }
  
  res.send(respuesta);
 })

  //DELETE
 .delete(function (req, res) {
  if(usuario.nombre === '' || usuario.apellido === '') {
   respuesta = {
    error: true,
    codigo: 501,
    mensaje: 'El usuario no ha sido creado'
   };
  } else {
   respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'Usuario eliminado'
   };
   usuario = { 
    nombre: '', 
    apellido: '' 
   };
  }
  res.send(respuesta);
 });

   app.use(function(req, res, next) {
    respuesta = {
     error: true, 
     codigo: 404, 
     mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
   });

  //Se pasan parametros y se inicializa el servidor
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});