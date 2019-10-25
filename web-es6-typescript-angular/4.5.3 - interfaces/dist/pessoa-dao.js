"use strict";
exports.__esModule = true;
var pessoa_1 = require("./pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
        this.nomeObjeto = 'Pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log(this.nomeObjeto, 'cadastrada com sucesso!');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log(this.nomeObjeto, 'atualizada com sucesso!');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log(this.nomeObjeto, 'removida com sucesso!');
        return new pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log(this.nomeObjeto, 'selecionada');
        return new pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log(this.nomeObjeto, 's selecionadas');
        return [new pessoa_1["default"]('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
