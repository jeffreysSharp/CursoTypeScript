import Concessionaria from './concessionaria';
import { ConcessionariaDao } from './concessionaria-dao';
import Pessoa from './pessoa';
import { PessoaDao } from './pessoa-dao';
import Veiculo from './veiculo';


console.log('=======================CONCESSIONÁRIA==============================')
// Concessionária
let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', []);

concessionariaDao.inserir(concessionaria);
concessionariaDao.atualizar(concessionaria);
concessionariaDao.remover(1);
concessionariaDao.selecionar(1);
concessionariaDao.selecionarTodos();

console.log('=======================Pessoa==============================')
// Pessoa
let pessoaDao: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('', '');


pessoaDao.inserir(pessoa);
pessoaDao.atualizar(pessoa);
pessoaDao.remover(1);
pessoaDao.selecionar(1);
pessoaDao.selecionarTodos();


console.log('=======================Veículo==============================')
// Veiculo
let veiculoDao: PessoaDao = new PessoaDao();
let veiculo: Veiculo = new Veiculo();


veiculoDao.inserir(pessoa);
veiculoDao.atualizar(pessoa);
veiculoDao.remover(1);
veiculoDao.selecionar(1);
veiculoDao.selecionarTodos();




// import Carro from './carro';
// import Moto from './moto';

// let carro = new Carro('Veloster', 3);
// carro.acelerar();
// carro.acelerar();


// let moto = new Moto();
// moto.acelerar();
// moto.acelerar();

// console.log(carro);
// console.log(moto);


