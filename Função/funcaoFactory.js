//Factory Simples - factory é uma função que sempre retorna um objeto

function criaPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criaPessoa())