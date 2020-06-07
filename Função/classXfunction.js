class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    //método
    falar() {
        console.log(`Meu nome é: ${this.nome}`)
    }
}
//criação dos objetos
const p1 = new Pessoa('João')
p1.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()