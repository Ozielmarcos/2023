const express = require('express');
const app = express();

const calculadoraImc = require('./calculadoraImc');
const retornaStatus = require('./retornaStatus');
const validaParametro = require('./validaParameter');

app.use(express.json());

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if (validaParametro.ValidParameter(req.query.peso) && validaParametro.ValidParameter(req.query.altura)) {

        let imc = calculadoraImc.calcularImc(peso, altura);
        let status = retornaStatus.retornaStatus(imc);

        res.json({ imc: imc, status: status });
    } else {
        res.status(400).json({ message: 'Peso ou altura inválidos' });
    }
})

app.listen(3005, () => {
    console.log('Server is running on port 3005');
});