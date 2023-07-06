const express = require('express');
const app = express();

let data = new Date();

let mensagemDoDia = require('./mensagemDoDia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornaMensagemDoDia(dia);

    res.json({ mensagem: mensagemSelecionada, dia });
})

app.listen(3000, () => {
    console.log('Servidor iniciado...');
});