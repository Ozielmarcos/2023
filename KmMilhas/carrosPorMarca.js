import express from 'express';
const app = express();

const carros = [
    { id: 1, marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { id: 2, marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { id: 3, marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { id: 4, marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];
// Retorna carros por marca
app.get('/carro', (req, res) => {
    const marca = req.query.marca;

    const result = carros.filter(carro => carro.marca === marca);
    res.json(result);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});