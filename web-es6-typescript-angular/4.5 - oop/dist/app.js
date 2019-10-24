"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var concessionaria_1 = require("./concessionaria");
var pessoa_1 = require("./pessoa");
// Criar listar de carros
var carroA = new carro_1["default"]('Dodge Journey', 4, 0);
var carroB = new carro_1["default"]('Veloster', 3, 0);
var carroC = new carro_1["default"]('Cerato', 4, 0);
// Montar a lista de carros da concessionária
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new concessionaria_1["default"]('Av. Paulista', listaDeCarros);
// Exibir Lista de carros
// console.log(concessionaria.mostrarListaDeCarros());
// Comprar o carro
var cliente = new pessoa_1["default"]('Jeferson', 'Veloster');
// console.log(cliente.dizerCarroPreferido());
var possuiCarro = cliente.dizerCarroQueTem() ? cliente.dizerCarroQueTem() : 'Não possui nenhum veículo';
console.log(possuiCarro);
concessionaria.mostrarListaDeCarros().map(function (carro) {
    // console.log(carro);
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        //comprar carro
        cliente.comprarCarro(carro);
    }
});
console.log('O cliente ', cliente.dizerNome(), 'comprou um ', cliente.dizerCarroQueTem());
