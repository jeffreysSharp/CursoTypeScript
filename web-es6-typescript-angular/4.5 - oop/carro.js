"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroPortas, velocidade) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroPortas;
        this.velocidade = velocidade;
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
exports["default"] = Carro;
