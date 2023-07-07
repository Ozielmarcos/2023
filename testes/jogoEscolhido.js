const express = require('express');
const app = express();

let jogos = ['Gears 5', 'Halo Infinite', 'Perfect Dark', 'Forza Horizon'];
let jogo_escolhido = jogos[2];

let jogo_json = { jogo: jogo_escolhido };

app.get('/', (req, res) => {
    res.send(jogo_json);
});

app.listen(3000, () => {
    console.log('Servidor iniciado');
});