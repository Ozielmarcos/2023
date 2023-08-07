function transformarNumerosDigitados(numerosDigitados) {
    let numerosStr = numerosDigitados.toString();

    if (numerosStr.length <= 4) {
        return numerosStr;
    } else {
        let transformaNumero = '#'.repeat(numerosStr.length - 4) + numerosStr.slice(-4);
        return transformaNumero;
    }
}
const numeroParaTransformar = 7204969936;  // não pode colocar o zero no começo??
const result = transformarNumerosDigitados(numeroParaTransformar);
console.log(result);