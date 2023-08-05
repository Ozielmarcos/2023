import express from 'express';
import { buscarUfs, buscarPorId, buscarUfPorNome } from './servicos/servicos.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).json({ erro: 'Nenhuma UF encontrada' });
    }

});

app.get('/ufs/:idUf', (req, res) => {
    const idUf = buscarPorId(req.params.idUf);

    if (idUf) {
        res.json(idUf);
    }
    else if (isNaN(parseInt(req.params.idUf))) {
        res.status(400).json({ erro: 'Id inválido' });
    } else {
        res.status(404).json({ erro: 'UF não encontrada' });
    }
});

app.listen(3000, () => {
    console.log('Server is running');
});