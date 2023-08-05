import express from 'express';
const app = express();

function agendaMensagem(agenda) {
    if (agenda === 1) {
        return 'Hoje vou jogar video game';
    } else if (agenda === 0) {
        return 'Hoje vou assistir um filme';
    } else {
        return 'Hoje vou dormir';
    }
}

app.get('/agenda', (req, res) => {
    const agenda = parseInt(req.query.agenda);
    const msg = agendaMensagem(agenda);
    res.json({ message: msg });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});