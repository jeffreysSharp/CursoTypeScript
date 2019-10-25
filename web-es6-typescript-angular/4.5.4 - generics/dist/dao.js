"use strict";
exports.__esModule = true;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
        this.nomeObjeto = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log(this.nomeObjeto, 'cadastrada com sucesso!');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log(this.nomeObjeto, 'atualizada com sucesso!');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log(this.nomeObjeto, 'removida com sucesso!');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log(this.nomeObjeto, 'selecionada');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log(this.nomeObjeto, 's selecionadas');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
