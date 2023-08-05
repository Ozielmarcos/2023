import express from 'express';
const app = express();

const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10 },
    { id: 2, nome: 'Produto 2', preco: 20 },
    { id: 3, nome: 'Produto 3', preco: 30 },
];

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});