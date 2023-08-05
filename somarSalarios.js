const funcionarios = [
    { nome: 'José Silva', cargo: 'Gerente', salario: 6000 },
    { nome: 'Eliana Rocha', cargo: 'ASM', salario: 3000 },
    { nome: 'Juliana Souza', cargo: 'Vendedor', salario: 2900 },
    { nome: 'Enzo Silva', cargo: 'Vendedor', salario: 2900 },
    { nome: 'Gabriel Machado', cargo: 'Vendedor', salario: 2900 },
];

const somarDespesa = (total, funcionario) => {
    return total + funcionario.salario;
};

const despesasSalario = funcionarios.reduce(somarDespesa, 0);
console.log(despesasSalario);