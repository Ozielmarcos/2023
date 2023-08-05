import express from 'express';
const app = express();

// Faz Conversão de Km/Milhas
app.get('/conversao', (req, res) => {
    const unidade = req.query.unidade;
    const valor = parseFloat(req.query.valor);
    if (unidade === 'quilometros') {
        const resultado = valor * 0.621371;
        res.json({ resultado: resultado });
    } else if (unidade === 'milhas') {
        const resultado = valor * 1.60934;
        res.json({ resultado: resultado });
    } else {
        res.status(400).json({ erro: 'Unidade inválida' });
    }

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');

});