class Carro {
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

class Concessionaria {
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

class Pessoa {
    public nome: string;
    public carroPreferido: string;
    public carro: any;

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome(): string {
        return this.nome;
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido;
    }

    public comprarCarro(carro: Carro): void {
        this.carro = carro;
    }

    public dizerCarroQueTem(): Carro {
        return this.carro;
    }
}

// Criar listar de carros
let carroA = new Carro('Dodge Journey', 4, 0);
let carroB = new Carro('Veloster', 3, 0);
let carroC = new Carro('Cerato', 4, 0);

// Montar a lista de carros da concessionária
let listaDeCarros: Carro[] = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);

// Exibir Lista de carros
// console.log(concessionaria.mostrarListaDeCarros());

// Comprar o carro
let cliente = new Pessoa('Jeferson', 'Veloster');
// console.log(cliente.dizerCarroPreferido());
console.log(cliente.dizerCarroQueTem());

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    // console.log(carro);
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {

        //comprar carro
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQueTem());