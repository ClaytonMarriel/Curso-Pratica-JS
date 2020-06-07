//Cadeia de caracteres, que pode delimitar por 3 simbolos: "", '', `´
const escola ="Cod3r"

console.log(escola.charAt(4)) // posição 4 do conteúdo da variavel
console.log(escola.charAt(5)) // quando a posição é maior do que a palavra, ai retorna vazio
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // a partir da posição 1 pra frente
console.log(escola.substring(0,3)) // da posição 0 a 3

console.log('Escola'+ escola + "!" )//adicionando a palavra escola e a exclamação
console.log(escola.replace(3, 'e')) // substituindo o 3 por e

console.log('Ana,Maria,Pedro'.split(',')) // convertendo para array
