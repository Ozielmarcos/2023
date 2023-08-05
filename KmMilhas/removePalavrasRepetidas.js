function removerPalavrasRepetidas(frase) {
    const palavras = frase.split(' ');
    const palavrasUnicas = [];

    // iteração com "for of"
    // for (let palavra of palavras) {
    //     if (palavrasUnicas.includes(palavra)) continue;
    //     palavrasUnicas.push(palavra);
    // }
    // console.log(palavrasUnicas.join(' '));


    // Iteração com 'for'
    for (let i = 0; i < palavras.length; i++) {
        if (!palavrasUnicas.includes(palavras[i])) {
            palavrasUnicas.push(palavras[i]);
        }
    }
    const resultado = palavrasUnicas.join(' ');
    console.log(resultado);
}

removerPalavrasRepetidas('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');