import Carro from "./carro";
import Concessionaria from "./concessionaria";
import Pessoa from "./pessoa";


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
let possuiCarro = cliente.dizerCarroQueTem() ? cliente.dizerCarroQueTem() : 'Não possui nenhum veículo';
console.log(possuiCarro);

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    // console.log(carro);
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {

        //comprar carro
        cliente.comprarCarro(carro);
    }
});

console.log('O cliente ', cliente.dizerNome(), 'comprou um ', cliente.dizerCarroQueTem());
