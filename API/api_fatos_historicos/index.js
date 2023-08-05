const express = require('express');
const app = express();

const validaAno = require('./servico/buscarAno');
const buscaAno = require('./servico/buscarAno');

app.get('/', (req, res) => {
    let ano = req.query.Ano;

    if (validaAno.validaAno(ano)) {
        let fato = buscaAno.buscarFatoPorAno(ano);
        res.json({ fato: fato });
    } else {
        res.status(400).json({ erro: 'Ano inválido' });
    }

})

app.listen(3005, () => {
    console.log('Server running...');
})