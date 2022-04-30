const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');
const data = require('../documents/000CPdescarga.json');

//Asentamientos
router.get('/', (req, res) => {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Asentamientos',
        data: data
       };
    res.send(respuesta);
});

router.get('/:cp', (req, res) => {
    const { cp } = req.params;
    const { estado, municipio, ciudad, asentamiento } = req.body;
    //let arrayFilter = [];
    //let cpAux = '';
    if (cp) {
        /*let arrayForEach = data.forEach( asentamiento =>  {
            if (asentamiento.cp === cp) {
                arrayFilter.push(asentamiento);
            }else{
                if (cpAux != asentamiento.cp) {
                    console.log('asentamiento.cp: '+ asentamiento.cp + ' cp(params): ' + cp);    
                };
            };
            cpAux = asentamiento.cp;
        }); */
        let arrayFilter = data.filter( asentamiento => asentamiento.cp === cp);
        console.log('arrayFilter: ' + arrayFilter);
        if (arrayFilter.length === 0) {
           return res.send( {
           error: true,
           codigo: 404,
           mensaje: 'Asentamientos CP: ' + cp,
           data: null
          });
        };
        let edo = arrayFilter[0].estado;
        let mpio = arrayFilter[0].municipio;
        var dataColonias = [];
        dataColonias.push({estado: edo, municipio: mpio, colonias: []});
        arrayFilter.forEach(element =>  {
                    dataColonias[0].colonias.push({tipo: (`${element.type}`),nombre: (`${element.asentamiento}`)});
                });
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Asentamientos CP: ' + cp,
            data: dataColonias
           };
        res.send(respuesta);
    }
    else {
        respuesta = {
            error: true,
            codigo: 500,
            mensaje: 'Existió un error',
            respuesta: null
           };
        res.send(respuesta);
    }
});

module.exports = router;

