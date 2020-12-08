import {Conta} from "./Conta.js"

export class ContaPoupanca extends Conta{
    constructor(saldoIncial, cliente, agencia){
        super(saldoIncial, cliente, agencia);
    }
    
    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}