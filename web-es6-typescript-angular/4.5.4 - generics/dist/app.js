"use strict";
exports.__esModule = true;
var concessionaria_1 = require("./concessionaria");
var dao_1 = require("./dao");
var pessoa_1 = require("./pessoa");
var veiculo_1 = require("./veiculo");
console.log('=======================CONCESSIONÁRIA==============================');
// Concessionária
var concessionariaDao = new dao_1.Dao();
var concessionaria = new concessionaria_1["default"]('', []);
concessionariaDao.inserir(concessionaria);
concessionariaDao.atualizar(concessionaria);
concessionariaDao.remover(1);
concessionariaDao.selecionar(1);
concessionariaDao.selecionarTodos();
console.log('=======================Pessoa==============================');
// Pessoa
var pessoaDao = new dao_1.Dao();
var pessoa = new pessoa_1["default"]('', '');
pessoaDao.inserir(pessoa);
pessoaDao.atualizar(pessoa);
pessoaDao.remover(1);
pessoaDao.selecionar(1);
pessoaDao.selecionarTodos();
console.log('=======================Veículo==============================');
// Veiculo
var veiculoDao = new dao_1.Dao();
var veiculo = new veiculo_1["default"]();
veiculoDao.inserir(veiculo);
veiculoDao.atualizar(veiculo);
veiculoDao.remover(1);
veiculoDao.selecionar(1);
veiculoDao.selecionarTodos();
