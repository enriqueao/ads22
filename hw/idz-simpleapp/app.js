const express = require('express');
const app = express();

const port = 5050;

app.get('/', (req, res) => {
    res.send("Hola mundo")
});

app.listen(port, () => console.log('running at 5050 port'));