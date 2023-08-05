function hojeTemAula() {
    let data = new Date();
    let diaSemana = data.getDay();

    let resposta;

    switch (diaSemana) {
        case 0:
        case 6:
            resposta = false;
            break;
        default:
            resposta = true;
            break;
    }
    return resposta;
}

exports.hojeTemAula = hojeTemAula;