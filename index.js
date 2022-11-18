const express = require('express');
const app = express();

app.get('/:nombre', (req, res) => {
    res.send('Hola ' + req.params.nombre);
});

app.post('/', (req, res) => {
    res.send('Hola ' + req.body.nombre);
});

app.listen(5000, function() {
    console.log('Servidor corriendo: http://127.0.0.1:5000')
});