const pessoa = {
    nome: 'Rebeka',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // exibe a chave
console.log(Object.values(pessoa)) // exibe os valores
console.log(Object.entries(pessoa)) // exibe a chave e o valor através de um array que tem duas posições

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/1990'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign ( ECMAScript 2015)
const dest = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3,
    a: 4
}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)