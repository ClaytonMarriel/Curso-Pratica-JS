// This dentro de uma função Arrow, é fixo, ele é baseado no contexto onde a função foi escrita e não influencia o fato da função ser chamada em outros lugares
//
function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa()


// o this, está apontando para o objeto PESSOA pois essa função foi escrita dentro da função PESSOA