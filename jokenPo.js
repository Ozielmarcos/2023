function jogoPedraPapelTesoura(opcaoJogador) {
    const opcoesDeJogada = ['pedra', 'papel', 'tesoura'];
    const opcaoCPU = opcoesDeJogada[Math.floor(Math.random() * opcoesDeJogada.length)];

    return (!opcoesDeJogada.find(opcao => opcao === opcaoJogador))
        ? 'Opção inválida. Escolha entre pedra, papel ou tesoura'
        : opcaoJogador === opcaoCPU
            ? `Empate! Ambos escolheram ${opcaoCPU}`
            : (opcaoJogador === 'pedra' && opcaoCPU === 'tesoura') ||
                (opcaoJogador === 'papel' && opcaoCPU === 'pedra') ||
                (opcaoJogador === 'tesoura' && opcaoCPU === 'papel')
                ? `Você ganhou! ${opcaoJogador} vence ${opcaoCPU}`
                : `Você perdeu! ${opcaoCPU} vence ${opcaoJogador}`;
}

const result = jogoPedraPapelTesoura('papel');
console.log(result);
