var dataAsentamientos = '';



function divideString(cadenaADividir,separador) {
   var arrayDeCadenas = cadenaADividir.split(separador);
   let element ='';
   let item = '';
   for (var i=0; i < arrayDeCadenas.length; i++) {
       arrayDeCadenas[i] = arrayDeCadenas[i].replace(/(\r\n|\n|\r)/gm,"");
       arrayDeCadenas[i] = arrayDeCadenas[i].replace(/['"]+/g, '');
       switch (i) {
        case 0: // d_codigo 
            item = ('{ "cp": "'  + arrayDeCadenas[i].trim() + '", ');
            element = (element + item);
            break;
        case 1: // d_asenta
            item = ('"asentamiento": "'  + arrayDeCadenas[i].trim() + '", ');
            element = (element + item);
            break; // Al encontrar un "break", no será ejecutado el 'case 2:'
        case 2: //d_tipo_asenta
            item = ('"type": "'  + arrayDeCadenas[i].trim() + '", ');
            element = (element + item);
            break;
        case 3: // D_mnpio
            item = ('"municipio": "'  + arrayDeCadenas[i].trim() + '", ');
            element = (element + item);
            break;
        case 4: // d_estado
            item = ('"estado": "'  + arrayDeCadenas[i].trim() + '", ');
            element = (element + item);
            break;
        case 5: // d_ciudad
            item = ('"ciudad": "'  + arrayDeCadenas[i].trim() + '", ');
            element = (element + item);
            break; 
        case 6: // d_CP
            item = ('"co": "'  + arrayDeCadenas[i].trim() + '" ');
            element = (element + item);
            break;
        }
        //console.log(item+arrayDeCadenas[i] )
   }
   element = (element + ' },');
   //console.log(element);
   return element;
};

function processLines(data){
    // Separar por salto de línea
    const lines = data.split("\n");
    var pipe = "|";
    var lineIndex = 0;
    var dataAsentamientos = '[ ';
    // Recorrer todas las líneas
    lines.forEach(line => {
        //console.log(lines.lenght);
        if (lineIndex > 0) {
            dataAsentamientos = dataAsentamientos + divideString(line, pipe);
        }
        lineIndex = lineIndex + 1; 
    });
    //dataAsentamientos = (dataAsentamientos.substring(0, dataAsentamientos.length - 1)) + ' } ]';
    dataAsentamientos = (dataAsentamientos.substring(0, dataAsentamientos.length - 1)) ;
    return dataAsentamientos;
}

const lineReader = require('line-reader');
const fs = require('fs');

function readFileTXTLinebyLine(path){
    // Separar por salto de línea
    var filename = path +  '000CPdescarga.txt';
    var pipe = "|";
    var lineIndex = 0;
    dataAsentamientos = '[ ';
    datAsent = [];
    // Recorrer todas las líneas
    lineReader.eachLine(filename, function(line, last) {     
      if (lineIndex > 0) {
          //console.log('Procesando: ' + lineIndex);
          dataAsentamientos = dataAsentamientos + divideString(line, pipe);
          datAsent.push(divideString(line,pipe));
        };
        if(last) {
            dataAsentamientos = dataAsentamientos + divideString(line, pipe);
            dataAsentamientos = (dataAsentamientos.substring(0, dataAsentamientos.length - 1)) + ' ]' ;
            datAsent.push(divideString(line,pipe));
            //console.log(dataAsentamientos);
            //return dataAsentamientos;
            //console.log(datAsent);
            //const datAsentJSON = JSON.stringify(datAsent);
            const datAsentJSON = JSON.stringify(dataAsentamientos);
            //console.log(datAsentJSON);
            
            const pathJSON = path + '../documents/000CPdescarga02.json';
            console.log(pathJSON);
            fs.writeFileSync(pathJSON, dataAsentamientos);
            //console.log(dataAsentamientos);    
        };
      lineIndex = lineIndex + 1;
    });
    console.log('TerminoLeerArchivoTXT');
    return datAsent;
}

function convertTXTJson(path){
    // let dataTXT = `d_codigo|d_asenta|d_tipo_asenta|D_mnpio|d_estado|d_ciudad|d_CP|c_estado|c_oficina|c_CP|c_tipo_asenta|c_mnpio|id_asenta_cpcons|d_zona|c_cve_ciudad
    // 01000|San �ngel|Colonia|�lvaro Obreg�n|Ciudad de M�xico|Ciudad de M�xico|01001|09|01001||09|010|0001|Urbano|01`;
    //const dataTXT = require('../documents/000CPdescarga.txt');
    //const dataTXT = require(path + '000CPdescarga.txt');
    //const dataTXT = readFileTXT(path + '000CPdescarga.txt');
    //console.log(dataTXT);
    //var dataUnformat = processLines(dataTXT);
    console.log('Inicia proceso de lectura de txt...');
    var dataUnformat = '';
    dataUnformat = readFileTXTLinebyLine(path);
    console.log('Inicia proceso de guardado a JSON...');
    const pathJSON = path + '000CPdescarga.json';
    const fs = require('fs');
    const storeData = (dataUnformat, pathJSON ) => {
    try {
        console.log('Escribiendo JSON');
        fs.writeFileSync(pathJSON, JSON.stringify(dataUnformat));
    } 
    catch (err) {
        console.log(err);
        console.error(err);
    }
    };
    console.log('Termina proceso...');
    return dataUnformat;
}

function readFileTXT(filename){
// Read the file and print its contents. 
       var fs = require('fs');
      
       const dataTXT = fs.readFile(filename, 'utf8', function(err, data) { 
           if (err) throw err; 
           console.log('OK: ' + filename); 
           console.log(data); 
        });
        console.log(dataTXT);
        return dataTXT;
}
const cpJSON = readFileTXTLinebyLine('../documents/');
console.log('cpJSON: '+ cpJSON);
//console.log(readFileTXTLinebyLine('../documents/'));
//console.log(convertTXTJson('../documents/'));
//console.log(readFileTXTLinebyLine('../documents/000CPdescarga.txt'));
//console.log("XXXXXXXX");


