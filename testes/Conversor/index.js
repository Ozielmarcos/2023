const express = require('express');
const app = express();

const conversorTemperatura = require('./conversor');

app.get('/', (req, res) => {
    let temperatura = req.query.temperatura;
    let conversor = req.query.conversor;

    let temperaturaEmGraus = conversorTemperatura.conversorTemperatura(temperatura, conversor);

    res.json({
        temperatura: temperaturaEmGraus
    });
});

app.listen(3005, () => {
    console.log('Server is running...');
});