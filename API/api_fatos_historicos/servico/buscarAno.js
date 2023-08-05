const fatosHistoricos = require('../dados/fatosHistoricos');

function validaAno(ano) {

    if (isNaN(ano)) {
        return false;
    } else if (ano >= 1920 && ano <= 2020) {
        return true;
    } else {
        return false;
    }
}

function buscarFatoPorAno(ano) {
    let selecionarFato = fatosHistoricos.find(fato => fato.Ano === ano);

    return selecionarFato.Fato;
}

exports.validaAno = validaAno;
exports.buscarFatoPorAno = buscarFatoPorAno;