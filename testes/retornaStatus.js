function retornaStatus(imc) {
    let status;
    if (imc < 18.5) {
        status = "Abaixo do peso";
    } else if (imc > 18.5 && imc < 25) {
        status = "Peso normal";
    } else if (imc > 25 && imc < 30) {
        status = "Acima do peso";
    } else {
        status = "Obeso";
    }
    return status;
}

exports.retornaStatus = retornaStatus;