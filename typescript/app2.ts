class Carro {
    private modelo : string;
    private numeroPortas : number;
    private velocidade : number = 0;

    constructor(modelo: string, numeroPortas: number) {        
        this.modelo = modelo;
        this.numeroPortas = numeroPortas;
    }

    public acelear(): void
    {
        this.velocidade = this.velocidade + 10;
    }

    public parar() : void 
    {
        this.velocidade = 0;
    }

    public velocidadeAtual() : number 
    {
        return this.velocidade;
    }
}

let carroA = new Carro('Veloster', 3);
console.log(carroA);
carroA.acelear();
console.log(carroA);
carroA.acelear();
carroA.acelear();
console.log(carroA);
