const express = require('express');
const app = express();

let data = new Date();
let mes = data.getMonth() + 1;
let estacaoDoAno;

if (mes == 12 || mes == 1 || mes == 2) {
    estacaoDoAno = 'Verão';
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacaoDoAno = 'Outono';
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacaoDoAno = 'Inverno';
} else if (mes == 9 || mes == 10 || mes == 11) {
    estacaoDoAno = 'Primavera';
};

app.get('/', (req, res) => {
    res.json({ estacao: estacaoDoAno })
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}
);