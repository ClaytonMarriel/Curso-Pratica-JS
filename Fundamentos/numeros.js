const peso1 = 1.0
const peso2 = 2.0   // Foram criado duas constantes

console.log(peso1,peso2) // exibido o valor das duas constantes

//Abaixo, a função "Number" verifica se as constantes peso1
//e peso2 são valores inteiros
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 6.891
const avaliacao2 = 7.813   // Criado mais duas constantes 
         
const total = avaliacao1 * peso1 + avaliacao2 * peso2 // Calculo da média total das notas
const media =  total / peso1 + peso2

console.log(media.toFixed(2)) // Aqui é realizado a diminuição das casas decimais pra no máximo 2
console.log(media.toString(2)) // Converte o valor para binário
console.log(typeof media)      //  Mostrando qual o tipo da média T
console.log(typeof Number)     //  Number - é uma função


//Funções associadas ao tipo Number 
//O dado tem funções associadas aquele dado,
//É chamado atraves do "."