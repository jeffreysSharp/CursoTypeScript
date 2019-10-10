export default class Carro {
    private modelo: string;
    private numeroDePortas: number;
    private velocidade: number = 0;

    constructor(modelo: string, numeroPortas: number, velocidade: number) {
        this.modelo = modelo;
        this.numeroDePortas = numeroPortas;
        this.velocidade = velocidade;
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar(): void {
        this.velocidade = this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }
}