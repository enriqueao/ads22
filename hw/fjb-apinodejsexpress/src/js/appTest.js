const utils = require('../js/utils');

try {
    jsonFile = utils.convertTXTJson('../documents/');
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'convertTXTJson',
        data: jsonFile
       };
    console.log(respuesta);
} 
catch (err) {
    console.error(err);
    respuesta = {
        error: true,
        codigo: 500,
        mensaje: 'Existió un error',
        respuesta: err
       };
    console.log(respuesta);
}