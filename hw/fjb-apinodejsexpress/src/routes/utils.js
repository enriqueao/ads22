const { Router, request } = require('express');
const router = Router();
const utils = require('../js/utils');

//Utils
router.get('/', (req, res) => {
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Utils',
        data: null
       };
    res.send(respuesta);
});

router.get('/converttxtjson', (req, res) => {
    try {
        jsonFile = utils.convertTXTJson('../documents/');
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'convertTXTJson',
            data: jsonFile
           };
        res.send(respuesta);
    } 
    catch (err) {
        console.log(err);
        respuesta = {
            error: true,
            codigo: 500,
            mensaje: 'Existió un error',
            respuesta: err
           };
        res.send(respuesta);
    }
});

module.exports = router;

