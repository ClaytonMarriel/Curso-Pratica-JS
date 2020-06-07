//Função sem retorno
function somaValor(a, b){ // cria a função com dois parametros
    console.log(a+b) //mostrar o valor da soma desses dois parametros
}
somaValor(2,4) // Dando valores aos parametros passados na função


//Função com retorno
function soma( a, b = 1 ){
 return (a+b) // retorna o resultado da soma dos parametros
}
console.log(soma(5))
console.log(5+6)
console.log(soma()) // Se os parametros já tivessem sido declarados
