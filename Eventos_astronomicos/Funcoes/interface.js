import { retornaIntensidade, retornaHemisferio, inverteMesAno } from './filtros.js';

const imprimeListaDeChuvas = (lista) => {
    console.log('\nNOME DA CHUVA       - INTENSIDADE  - HEMISFÉRIO  - PERÍODO');

    lista.forEach(imprimeChuva);
}

const imprimeChuva = (chuva) => {
    const nome = chuva.nome.padEnd(27, ' ');
    let intensidade = retornaIntensidade(chuva.intensidade)
    let hemisferio = retornaHemisferio(chuva.hemisferio)

    intensidade = intensidade.padEnd(11, ' ');
    hemisferio = hemisferio.padEnd(10, ' ');

    const data_inicio = inverteMesAno(chuva.inicio)
    const data_fim = inverteMesAno(chuva.fim)

    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${data_inicio} à ${data_fim}`);

}

export default imprimeListaDeChuvas;