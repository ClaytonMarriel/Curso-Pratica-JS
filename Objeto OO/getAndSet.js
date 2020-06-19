//get e set são funções e que dentro dessas funções os valores são acessados
const sequencia = {
    _valor: 1, // convenção
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
    // aparentemente está chamando um atributo, porém está chamando o get e set
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)