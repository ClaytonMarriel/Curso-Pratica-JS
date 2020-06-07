//Formas de criar uma função

// 1- de forma literal

function f1() {}

// 2- Criar uma função dentro de uma váriavel

const funcao = function () {}

// 3- Armazenar a função dentro de um array

const array = [function (a, b) {
    return a + b
}, f1, f2]
console.log(array[0](2, 3))

//4- Armazenar a função dentro de um atributo do objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar())

// 5- Passar função como parâmetro dentro de outra função
function run(fun) {
    fun()
}
run(function () {
    console.log('Executando...')
})

// 6- Um função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)