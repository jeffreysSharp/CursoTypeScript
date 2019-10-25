"use strict";
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('lógica inserir');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('lógica atualizar');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('lógica remover');
        return new pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('lógica selecionar');
        return new pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('lógica selecionar todos');
        return [new pessoa_1["default"]('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
