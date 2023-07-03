
export const verificaChuvaPorData = (chuva, dataAtual) => {
    const anoAtual = dataAtual.getFullYear();

    const data_inicio = new Date(chuva.inicio + '/' + anoAtual);
    const data_fim = new Date(chuva.fim + '/' + anoAtual);

    if (data_inicio.getMonth() + 1 > data_fim.getMonth() + 1) {
        const anoFinal = data_fim.getFullYear() + 1;
        data_fim.setFullYear(anoFinal + 1);
    }
    return (dataAtual >= data_inicio && dataAtual <= data_fim);
}

export const verificaChuvaProximosMeses = (chuva, data) => {
    const dataAtual = data;
    const anoAtual = dataAtual.getFullYear();
    const data_inicio = new Date(chuva.inicio + '/' + anoAtual);
    const data_fim = new Date(dataAtual);

    if (dataAtual.getMonth() + 1 > data_inicio.getMonth() + 1) {
        const anoFinal = data_inicio.getFullYear();
        data_inicio.setFullYear(anoFinal + 1);
    }

    data_fim.setMonth(data_fim.getMonth() + 2);

    return (dataAtual < data_inicio && data_inicio < data_fim)
};

export const inverteMesAno = (data) => {
    const dataInvertida = data.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}

export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (fraca)';

    if (intensidade.indexOf('Forte') >= 0) {
        novaIntensidade = '3 (Forte)';
    } else if (intensidade.indexOf('Média') >= 0) {
        novaIntensidade = '2 (Média)';
    } else if (intensidade.indexOf('Irregular') >= 0) {
        novaIntensidade = '(Irregular)';
    }
    return novaIntensidade;
}

export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';