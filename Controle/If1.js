function soBoaNoticia(nota){
    if(nota >=7){
        console.log('Aprovado ' + nota)
    }
}
soBoaNoticia(7.2)
soBoaNoticia(6.1)

function verdadeiroOuFalso(valor){
    if(valor){
        console.log('É verdade..' + valor)
    }
}
verdadeiroOuFalso()
verdadeiroOuFalso('Hehe')
verdadeiroOuFalso(null)
verdadeiroOuFalso(NaN)
verdadeiroOuFalso('')
verdadeiroOuFalso(' ')
