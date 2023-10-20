function separaNumeros(lista){

    var listaParametros = new Array();

    for(var i=0;i<lista.length;i++){

        if(typeof(lista[i]===typeof(1))){

            listaParametros.push(lista[i]);
        }
    }
    return listaParametros
}

var array = ["hola", "adiós", 1234, undefined];
var resultado = separaNumeros(array);
console.log(resultado);