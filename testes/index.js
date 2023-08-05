const express = require('express');
const app = express();

const escola = require('./escola');

app.get('/', (req, res) => {
    let temAula = escola.hojeTemAula();
    res.json({ temAula: temAula });
})

app.listen(3005, () => {
    console.log('Server is running...');
});