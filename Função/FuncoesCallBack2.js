//Sem callback
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);

//Com callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
}); // irá filtrar as notas que retornarem "true", será adicionada a um novo array, pra receber as notas baixas
console.log(notasBaixas2)

const notaMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notaMenorQue7 => nota < 7)
console.log(notasBaixas3) // ARROWFUNCTION