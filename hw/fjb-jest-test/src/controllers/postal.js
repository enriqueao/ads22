const db = require('../db/postal_collection');

function getColonia (postalCode) {
    const resultColonias = db.filter(colonia => colonia.cp === postalCode);

    const mappedColonias = mapColonias(resultColonias);
    
    return mappedColonias;
}

function mapColonias (colonias) {   
    const resultColonias = colonias.map( colonia => colonia.asentamiento );
    const [firstResult] = colonias;
    const mappedColonias = {
        colonias: resultColonias,
        estado: firstResult.estado,
        municipio: firstResult.municipio,
        ciudad: firstResult.ciudad,
        cp: firstResult.cp,
        resultados: colonias.length,
    };
    return mappedColonias;
}

getColonia('76121');

module.exports = {
    getColonia,
};