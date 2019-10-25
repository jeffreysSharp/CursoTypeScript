"use strict";
exports.__esModule = true;
var concessionaria_1 = require("./concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
        this.nomeObjeto = 'Concessionária';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log(this.nomeObjeto, 'cadastrada com sucesso!');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log(this.nomeObjeto, 'atualizada com sucesso!');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log(this.nomeObjeto, 'removida com sucesso!');
        return new concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log(this.nomeObjeto, 'selecionada');
        return new concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log(this.nomeObjeto, 's selecionadas');
        return [new concessionaria_1["default"]('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
