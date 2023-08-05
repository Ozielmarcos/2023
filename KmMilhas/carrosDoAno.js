const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2023 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2023 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];

const carrosPorAno = () => {
    let hoje = new Date();
    let anoAtual = hoje.getFullYear();

    const carrosDoAno = carros.filter(carro => carro.anoFabricacao === anoAtual);
    return carrosDoAno;

}
console.log(carrosPorAno());