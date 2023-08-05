
const traduzirLinguaDoP = (frase) => {
    const consoantes = 'bcdfghjklmnpqrstvwxyz';
    let traducao = '';
    frase = frase.toLowerCase();

    for (let caractere of frase) {
        consoantes.includes(caractere) ? traducao += 'p' + caractere : traducao += caractere;
    }
    return traducao;
}

let result = traduzirLinguaDoP('Meu barco virou');
console.log(result);