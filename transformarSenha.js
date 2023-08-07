// Transformar frases em senha
// Você trabalha para uma empresa que está desenvolvendo um sistema para transformar frases em senhas. Você precisa criar uma função que:

// 1 - Converter a primeira letra de cada palavra da frase, de acordo com a tabela abaixo:
// - letra 'i', converte para 1
// - letra 'o', converte para 0
// - letra 's', converte para 5
// - letra 'e', converte para 3

// 2- Se a primeira letra não for (i,o,s,e), ela deve ser adicionada em minúsculo na string final da senha. Por exemplo:

// Igreja Parquinho Oráculo Semana Todavia

// É convertido para: 1p05t

// Complete o código a fim de criar a função, conforme as instruções abaixo:

// - Comece separando a frase em um array de palavras (use espaço como separador);
// - Percorra o novo array de palavras;
// - A primeira letra de cada palavra do novo array deve ser convertida em minúsculo;
// - Realize as verificações. Se a constante primeiraLetra for igual a:
// * "i" - a letra será trocada por 1;
// * "o" - a letra será trocada por 0;
// * "s" - a letra será trocada por 5;
// * "e" - a letra será trocada por 3;
// - Se for diferente, apenas concatene o caractere;

function transformarFraseEmSenha(frase) {
    const palavras = frase.split(' ');
    let senha = '';

    palavras.forEach(palavra => {
        const primeiraLetra = palavra.charAt(0).toLowerCase();

        if (primeiraLetra === 'i') senha += '1';
        else if (primeiraLetra === 'o') senha += '0';
        else if (primeiraLetra === 's') senha += '5';
        else if (primeiraLetra === 'e') senha += '3';
        else {
            senha += primeiraLetra;
        }
    });
    return senha;
};
const result = transformarFraseEmSenha('Esta sendo Incrivel Tudo que se pode fazer em programação');
console.log(result);