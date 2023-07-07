const express = require('express');
const app = express();

//idéia de verificar senha forte/senha fraca
let senha = '132541ab';
let nivel_senha = senha.length > 7 ? 'Senha Forte' : 'Senha Fraca';

let resposta = { senha: nivel_senha };
app.get('/', (req, res) => {
    res.json(resposta);
})

app.listen(3000, () => {
    console.log('Servidor iniciado');
});