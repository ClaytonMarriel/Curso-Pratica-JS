// Definição: Chamar de volta
//Passar uma função para outra função
//Quando um determinado evento acontecer, essa função ser chamada de volta
//Foreach - > É Uma função, dentro do array tem essa função do forEACH
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir); // Pra cada elemento que for encontrado, a função será chamada de volta
fabricantes.forEach(fabricante => console.log(fabricante))

//O CALLBACK QUANDO RECEBE UM NOVO ELEMENTO PERCORRIDO NO VETOR, ELE CHAMA O CALLBACK, CHAMANDO A FUNÇÃO DE VOLTA