console.log(typeof Object) // o object é uma função
console.log(typeof new Object) //Instanciando um objeto dentro da função
//Função recebe o objeto
const Cliente = function(){
    console.log(typeof Cliente)
    console.log(typeof new Cliente) // instanciei minha propria função
}

class Produto{}
console.log(typeof Produto)
console.log(typeof new Produto) //instanciando a classe, vc tem um objeto

