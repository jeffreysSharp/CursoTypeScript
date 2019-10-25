import { DaoInterface } from "./dao-interface";
import Veiculo from "./veiculo";


export class VericuloDao implements DaoInterface {

    nomeTabela: string = 'tb_veiculo';
    nomeObjeto: string = 'Veículo';

    inserir(object: Veiculo): boolean {

        console.log(this.nomeObjeto, 'cadastrada com sucesso!');
        return true;
    }

    atualizar(object: Veiculo): boolean {

        console.log(this.nomeObjeto, 'atualizada com sucesso!');
        return true;
    }

    remover(id: number): Veiculo {

        console.log(this.nomeObjeto, 'removida com sucesso!');
        return new Veiculo();
    }

    selecionar(id: number): Veiculo {

        console.log(this.nomeObjeto, 'selecionada');
        return new Veiculo();
    }

    selecionarTodos(): [any] {
        console.log(this.nomeObjeto, 's selecionadas');
        return [new Veiculo()];
    }

}