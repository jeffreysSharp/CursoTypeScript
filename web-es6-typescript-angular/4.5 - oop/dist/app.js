"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroPortas) {
        // private numeroDePortas: number;
        this.velocidade = 0;
        this.modelo = modelo;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaCarros;
    };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
// Criar listar de carros
var carroA = new Carro('Dodge Journey', 4);
var carroB = new Carro('Veloster', 3);
var carroC = new Carro('Cerato', 4);
// Montar a lista de carros da concessionária
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);
// Exibir Lista de carros
console.log(concessionaria.mostrarListaDeCarros());
// Comprar o carro
var cliente = new Pessoa('Jeferson', '');
// VIDEO 22 
