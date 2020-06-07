function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook, 3000.00'))
console.log(criarProduto('ps4, 2000.00'))