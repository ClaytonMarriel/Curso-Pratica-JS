//Armazenando uma função dentro de uma váriavel

const imprimirSoma =  function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

//Armazenando uma função arrow em uma váriavel
 const soma = (a,b) => {
     return a+b;
 }

 console.log(soma(2,4))

 //Retorno implicito
 const subtracao = (a,b) => a-b
 console.log(subtracao(3,2))

 const imprimir2 = a => console.log(a)
 imprimir2('Legal !!')