import Carro from "./carro";
import ConcessionariaInterface from "./concessionaria-interface";


export default class Concessionaria implements ConcessionariaInterface {
    public endereco: string;
    public listaCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco;
        this.listaCarros = listaDeCarros;
    }

    public fornecerHorarioDeFuncionamento(): string {

        return 'De segunda à sexta das 08:00 ';
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaCarros;
    }

}