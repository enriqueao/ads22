//Inicialización de constantes y variables para lectura de JSON
/* const fs = require('fs');
let rawdata = fs.readFileSync('cpqro.json');
let cpqro = JSON.parse(rawdata); */

const cpqro = require('../documents/0cpqro.json');

//Función para búsqueda de colonias en el JSON leído, devuelve el arreglo unicamente con los asentamientos
function busquedaColonias(pCP, asentamientos){
    let arrayFilter = asentamientos.filter( asentamiento => asentamiento.cp == pCP);
    let colonias = new Array();
    arrayFilter.forEach(element =>  colonias.push(`${element.asentamiento}`));
    return colonias;
};

//llamado de consola para impresión del arreglo de colonias ya filtrado por código postal
console.log(busquedaColonias('76139',cpqro));
