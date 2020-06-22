class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // chamando o construtor do avo
        this.profissao = profissao // atribuindo ao objeto que foi instanciado

    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // passando o sobrenome, chamando o construtor do pai
    }
}
const filho = new Filho
console.log(filho)