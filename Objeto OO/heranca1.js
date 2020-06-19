const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//__proto__ -> A partir dele, é possível acessar o objeto PAI
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // ele representa o Object.prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)
}