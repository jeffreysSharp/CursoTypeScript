"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroPortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
    }
    Carro.prototype.acelear = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var carroA = new Carro('Veloster', 3);
console.log(carroA);
carroA.acelear();
console.log(carroA);
carroA.acelear();
carroA.acelear();
console.log(carroA);
