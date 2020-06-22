//Object.preventExtensions -> O objeto não será estendido, não será possível adicionar atributos do objeto

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = "Borracha escolar"
delete produto.tag
console.log(produto)

//Object.seal -> Ao selar um objeto, não é possível realizar alterações no objeto ( adicionar e remover) , consegue editar os atributos
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
console.log(pessoa)

//Object.freeze = selado + valores constantes -> não é possível realizar nada no objeto