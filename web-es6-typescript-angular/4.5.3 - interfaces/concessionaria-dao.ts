import Concessionaria from "./concessionaria";
import { DaoInterface } from "./dao-interface";


export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria';
    nomeObjeto: string = 'Concessionária';

    inserir(object: Concessionaria): boolean {

        console.log(this.nomeObjeto, 'cadastrada com sucesso!');
        return true;
    }

    atualizar(object: Concessionaria): boolean {

        console.log(this.nomeObjeto, 'atualizada com sucesso!');
        return true;
    }

    remover(id: number): Concessionaria {

        console.log(this.nomeObjeto, 'removida com sucesso!');
        return new Concessionaria('', []);
    }

    selecionar(id: number): Concessionaria {

        console.log(this.nomeObjeto, 'selecionada');
        return new Concessionaria('', []);
    }

    selecionarTodos(): [any] {

        console.log(this.nomeObjeto, 's selecionadas');
        return [new Concessionaria('', [])];
    }

}