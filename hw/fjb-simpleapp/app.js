const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    console.log("solicitaron una respuesta")
    res.send("hola desde express")
});

app.listen(port, () => console.log('running en el puerto 3000'));