import { DaoInterface } from "./dao-interface";
import Pessoa from "./pessoa";


export class PessoaDao implements DaoInterface {

    nomeTabela: string = 'tb_pessoa';

    inserir(object: Pessoa): boolean {

        console.log('lógica inserir')
        return true;
    }

    atualizar(object: Pessoa): boolean {

        console.log('lógica atualizar')
        return true;
    }

    remover(id: number): Pessoa {

        console.log('lógica remover')
        return new Pessoa('', '');
    }

    selecionar(id: number): Pessoa {

        console.log('lógica selecionar');
        return new Pessoa('', '');
    }

    selecionarTodos(): [any] {
        console.log('lógica selecionar todos');
        return [new Pessoa('', '')];
    }

}