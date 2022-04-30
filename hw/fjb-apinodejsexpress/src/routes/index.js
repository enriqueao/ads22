const { Router } = require('express');
const router = Router();

//Raiz
router.get('/', function(req, res) {
    respuesta = {
     error: true,
     codigo: 200,
     mensaje: 'Punto de inicio',
     data: null
    };
    res.send(respuesta);
   });

module.exports = router;