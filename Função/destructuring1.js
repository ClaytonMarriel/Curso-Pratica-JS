const obj = {
 nome: 'Clayton',
 idade: 10,
 endereco: {
     rua: 'Sao Mateus',
     bairro: 'Rua do Fogo'
 }
}

const {nome:n ,idade:i} = obj
console.log(n,i)

const {sobrenome, bemHumorada = true} = obj
console.log(sobrenome, bemHumorada);

const {endereco: { logradouro, numero, cep = 100}} = obj
console.log(logradouro,numero,cep)
