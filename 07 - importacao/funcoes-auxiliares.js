function gets() {
    return 7;
}

function print(texto) {
    console.log(texto);
}

//Essa é uma forma de exportar uma função
//module.exports.printa = print;

//essa é outra forma de exportar funções
//module.exports = { 
//    get: gets,
//    print: print
//};

//Se o nome escolhido para a exportação for o mesmo da função, você pode simplificar
module.exports = { gets, print }