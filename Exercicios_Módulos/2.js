function ladosTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        resultado = "Equilátero"
    } else if (ladoA === ladoB && ladoA != ladoC) {
        resultado = "Isóceles"
    } else {
        resultado = "Escaleno"
    }
}
var resultado
ladosTriangulo(10, 10, 12)
console.log(resultado)