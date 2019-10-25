import { DaoInterface } from "./dao-interface";

export class Dao<T> implements DaoInterface<T> {
    nomeTabela: string = '';
    nomeObjeto: string = '';

    inserir(object: T): boolean {

        console.log(this.nomeObjeto, 'cadastrada com sucesso!');
        return true;
    }

    atualizar(object: T): boolean {

        console.log(this.nomeObjeto, 'atualizada com sucesso!');
        return true;
    }

    remover(id: number): T {

        console.log(this.nomeObjeto, 'removida com sucesso!');
        return Object();
    }

    selecionar(id: number): T {

        console.log(this.nomeObjeto, 'selecionada');
        return Object();
    }

    selecionarTodos(): [T] {
        console.log(this.nomeObjeto, 's selecionadas');
        return [Object()];
    }

}