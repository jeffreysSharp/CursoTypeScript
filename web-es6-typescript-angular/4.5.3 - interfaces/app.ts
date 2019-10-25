import Pessoa from './pessoa';
import { PessoaDao } from './pessoa-dao';


let dao: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('', '');


dao.inserir(pessoa);
dao.atualizar(pessoa);
dao.remover(1);
dao.selecionar(1);
dao.selecionarTodos();

// import Concessionaria from './concessionaria';
// import { ConcessionariaDao } from './concessionaria-dao';

// let dao: ConcessionariaDao = new ConcessionariaDao();
// let concessionaria = new Concessionaria('', []);

// dao.inserir(concessionaria);
// dao.atualizar(concessionaria);
// dao.remover(1);
// dao.selecionar(1);
// dao.selecionarTodos();


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


