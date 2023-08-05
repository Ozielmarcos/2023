const itensOpcionais = [
    { nome: 'Pré som', valor: 800.00 },
    { nome: 'Conta giros', valor: 500.00 },
    { nome: 'Desembaçador traseiro', valor: 1000.00 },
    { nome: 'Ar quente', valor: 1800.00 },
];

const itensBaratos = itensOpcionais.filter(item => item.valor < 1000);

itensBaratos.forEach(item => {
    console.log(item.nome + ' :R$' + item.valor);
});

console.log(itensBaratos);