const notas = [6.7, 8.2, 9.1, 4.3]

for( let i in notas) {
    console.log(i, notas[i])
}

const pessoas = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 10,
    peso: 50.1
}

for(let atributo in pessoas){
    console.log(`${atributo} = ${pessoas[atributo]}`)
}