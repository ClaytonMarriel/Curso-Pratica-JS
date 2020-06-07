let valor // nunca foi declarado
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

const produto = {}
console.log (produto.preco) // Não foi definido o preço dentro do produto
console.log(produto) // Não foi definido um valor no endereço de memória

produto.preco = undefined // não é recomendado fazer
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)