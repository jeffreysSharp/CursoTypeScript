"use strict";
exports.__esModule = true;
var concessionaria_1 = require("./concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('lógica inserir');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('lógica atualizar');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('lógica remover');
        return new concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('lógica selecionar');
        return new concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('lógica selecionar todos');
        return [new concessionaria_1["default"]('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
