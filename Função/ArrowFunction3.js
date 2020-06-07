 let comparaComThis = function (param) {
     console.log(this === param)
 }
 comparaComThis(this);

 //Numa função normal, o this aponta para o objeto global, no navegador, seria o window

 const obj = {}
 comparaComThis = comparaComThis.bind(obj) // por causa do bind o this passa a apontar para o obj
 comparaComThis(global)
 comparaComThis(obj)

 let comparaComThisArrow = param => console.log(this === param)
 comparaComThisArrow(global)
 comparaComThisArrow(module.exports)

 comparaComThisArrow = comparaComThisArrow.bind(obj)
 comparaComThisArrow(obj)

 // no arrowFunction, o this aponta diretamente para o arquivo onde foi criado  
 // O this aponta exatamente onde o contexto foi escrito.
 //comparaComThisArrow(module.exports)