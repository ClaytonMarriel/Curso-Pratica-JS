function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0


    //metodo pulico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

//Criei uma função carro,onde ele possui dois parâmetros
// 1- velocidade máxima
//2- acelera em quanto em quantos deltas = 5

//Criei um método publico acelerar "this.acelerar"
// Onde ele só iria acelear o carro se a velocidadeAtual + delta = 200
//Depois criei mais um método publico
//Onde o get iria receber a velocidade atual

//Criei duas instâncias diferentes, porém da mesma função
//Uno e Ferrari