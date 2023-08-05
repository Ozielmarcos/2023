// function jogoPedraPapeltesoura(opcaoJogador) {
//     const opcoesDeJogada = ['pedra', 'papel', 'tesoura'];
//     const opcaoCPU = opcoesDeJogada[Math.floor(Math.random())];
//     console.log(opcaoCPU)

//     return (opcoesDeJogada.find(opcao => opcao === opcaoJogador))
//         ? 'Opção inválida. Escolha entre pedra, papel ou tesoura' : opcaoCPU
//             ? `Empate! Ambos escolheram ${opcaoCPU}`
//             : (opcaoJogador == 'pedra' && opcaoCPU == 'tesoura') ||
//                 (opcaoJogador == 'papel' && opcaoCPU == 'pedra') ||
//                 (opcaoJogador == 'tesoura' && opcaoCPU == 'papel')
//                 ? `Vocé ganhou! ${opcaoJogador} vence ${opcaoCPU}`
//                 : `Vocé perdeu! ${opcaoCPU} vence ${opcaoJogador}`;
// }
// const result = jogoPedraPapeltesoura('papel');
// console.log(result);
