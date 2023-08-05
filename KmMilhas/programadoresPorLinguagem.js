const programadores = [
    { nome: 'João', pais: 'Brasil', continente: 'Américas', idade: 19, linguagem: 'Python' },
    { nome: 'Caterina', pais: 'Bielorrússia', continente: 'Europa', idade: 29, linguagem: 'JavaScript' },
    { nome: 'Yang', pais: 'China', continente: 'Ásia', idade: 39, linguagem: 'Ruby' },
    { nome: 'Calebe', pais: 'Israel', continente: 'Ásia', idade: 40, linguagem: 'Ruby' },
    { nome: 'Andrei', pais: 'Romênia', continente: 'Europa', idade: 59, linguagem: 'C' },
    { nome: 'Marieta', pais: 'Peru', continente: 'Américas', idade: 60, linguagem: 'C' },
    { nome: 'Lukas', pais: 'Croácia', continente: 'Europa', idade: 75, linguagem: 'Python' },
    { nome: 'Samantha', pais: 'Geórgia', continente: 'Europa', idade: 88, linguagem: 'Ruby' },
    { nome: 'Viktoria', pais: 'Bulgária', continente: 'Europa', idade: 98, linguagem: 'PHP' },
    { nome: 'Podolski', pais: 'Polônia', continente: 'Europa', idade: 128, linguagem: 'JavaScript' }
];

// const filtrarPorLinguagem = () => {
//     for (let linguagem of programadores) {
//         const ruby = programadores.filter(programador => programador.linguagem === 'Ruby');
//         return ruby;
//     }
// }

// console.log(filtrarPorLinguagem());

// Refatorado
const filtrarPorLinguagem = (programadores) => programadores.filter(programador => programador.linguagem === 'Ruby');

console.log(filtrarPorLinguagem(programadores));