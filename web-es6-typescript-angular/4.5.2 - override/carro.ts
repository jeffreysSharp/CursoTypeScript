import Veiculo from "./veiculo";

export default class Carro extends Veiculo {
    private numeroDePortas: number;

    constructor(modelo: string, numeroPortas: number) {
        super()
        this.modelo = modelo;
        this.numeroDePortas = numeroPortas;
    }
}