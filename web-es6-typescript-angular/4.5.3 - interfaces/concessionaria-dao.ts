import Concessionaria from "./concessionaria";
import { DaoInterface } from "./dao-interface";


export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria';

    inserir(object: Concessionaria): boolean {

        console.log('lógica inserir')
        return true;
    }

    atualizar(object: Concessionaria): boolean {

        console.log('lógica atualizar')
        return true;
    }

    remover(id: number): Concessionaria {

        console.log('lógica remover')
        return new Concessionaria('', []);
    }

    selecionar(id: number): Concessionaria {

        console.log('lógica selecionar');
        return new Concessionaria('', []);
    }

    selecionarTodos(): [any] {
        console.log('lógica selecionar todos');
        return [new Concessionaria('', [])];
    }

}