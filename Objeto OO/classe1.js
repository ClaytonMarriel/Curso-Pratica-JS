// A criação da classe e o constructor = função construtora
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor

    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos) { // concatenando todos os parametros em um array
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() { // metodo

        let valorConsolidado = 0
        this.lancamentos.forEach(l => { // cada lançamento, irá somar ao valor consolidado
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salário', 5000)
const contaDeLuz = new Lancamento('Conta de Luz', -150)

const contas = new CicloFinanceiro(2, 2019)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())