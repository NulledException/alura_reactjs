import {
  Cliente
} from './Cliente.js';
import {
  ContaCorrente
} from './ContaCorrente.js';

const cliente1 = new Cliente("Gabriel",73634);
const cliente2 = new Cliente("Eduardo",88875);

const contaCorrenteGabriel = new ContaCorrente(cliente1,1001);
const contaCorrenteEduardo = new ContaCorrente(cliente2,1002);

contaCorrenteGabriel.depositar(100);
contaCorrenteGabriel.sacar(50);

contaCorrenteGabriel.transferir(40, contaCorrenteEduardo)

console.log(contaCorrenteGabriel);
console.log(contaCorrenteEduardo);