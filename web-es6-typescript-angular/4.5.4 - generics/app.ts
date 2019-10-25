import Concessionaria from './concessionaria';
import { Dao } from './dao';
import Pessoa from './pessoa';
import Veiculo from './veiculo';



console.log('=======================CONCESSIONÁRIA==============================')
// Concessionária
let concessionariaDao: Dao<Concessionaria> = new Dao();
let concessionaria = new Concessionaria('', []);

concessionariaDao.inserir(concessionaria);
concessionariaDao.atualizar(concessionaria);
concessionariaDao.remover(1);
concessionariaDao.selecionar(1);
concessionariaDao.selecionarTodos();

console.log('=======================Pessoa==============================')
// Pessoa
let pessoaDao: Dao<Pessoa> = new Dao();
let pessoa: Pessoa = new Pessoa('', '');


pessoaDao.inserir(pessoa);
pessoaDao.atualizar(pessoa);
pessoaDao.remover(1);
pessoaDao.selecionar(1);
pessoaDao.selecionarTodos();


console.log('=======================Veículo==============================')
// Veiculo
let veiculoDao: Dao<Veiculo> = new Dao();
let veiculo: Veiculo = new Veiculo();


veiculoDao.inserir(veiculo);
veiculoDao.atualizar(veiculo);
veiculoDao.remover(1);
veiculoDao.selecionar(1);
veiculoDao.selecionarTodos();
