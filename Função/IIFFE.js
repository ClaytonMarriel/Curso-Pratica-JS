//função auto invocada -- Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
})();

//É uma função que ao ser executada, já chama tudo que há nela