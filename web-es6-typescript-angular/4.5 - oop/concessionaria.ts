import Carro from "./carro";


export default class Concessionaria {
    public endereco: string;
    public listaCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco;
        this.listaCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaCarros;
    }

}