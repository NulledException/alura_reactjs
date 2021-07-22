import {
  Cliente
} from './Cliente.js'

export class ContaCorrente {
  agencia;
  _cliente;
  _saldo = 0;
  static numeroContas = 0;

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }

  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) return;

    this._saldo += valor;
  }

  transferir(valor, conta) {
    this.sacar(valor);
    conta.depositar(valor);
  }

  constructor(cliente, agencia){
    this.agencia = agencia;
    this._cliente = cliente;
    ContaCorrente.numeroContas += 1
  }
}