//É uma função anônima, onde temos que armazenar ela em uma váriavel

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // Outra forma de criar uma função
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui param
console.log(ola())