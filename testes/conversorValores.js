const express = require('express');
const app = express();

let valor = 25.50;
let valor_convertido;
let conversor = 'dolar';

switch (conversor) {
    case 'dolar':
        valor_convertido = (valor * 5.60).toFixed(2);
        break;
    case 'real':
        valor_convertido = (valor * 0.18).toFixed(2);
        break;
}

app.get('/', (req, res) => {
    res.json({ conversao: valor_convertido });
})

app.listen(3000, () => {
    console.log('Servidor iniciado.');
});