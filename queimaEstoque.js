const produtos = [
    { id: 1, nome: 'Camiseta', estoque: 5, preco: 50 },
    { id: 2, nome: 'Calça', estoque: 2, preco: 100 },
    { id: 3, nome: 'Tênis', estoque: 10, preco: 200 },
    { id: 4, nome: 'Boné', estoque: 1, preco: 30 },
];

function queimaDeEstoque(produtos) {
    const estoqueMinimo = 3;
    return produtos.map(produto => {
        if (produto.estoque <= estoqueMinimo) {
            return {
                id: produto.id,
                nome: produto.nome,
                estoque: produto.estoque,
                preco: produto.preco * 0.9,
            }
        } else {
            return produto;
        }
    })
}

console.log(queimaDeEstoque(produtos));