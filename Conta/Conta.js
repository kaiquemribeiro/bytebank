export class Conta {
    constructor(saldoIncial, cliente, agencia){
        if (this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente!");
        }
        this._saldo = saldoIncial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){ //valor privado, verificando se é do tipo cliente
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente; //para conseguir pegar apenas o cliente
    }
    

    get saldo(){
        return this._saldo; //aqui eu consigo apenas acessar o saldo, ja que existe apenas o get
    }

    sacar(valor){
        // vazio para não permitir saque sem passar pelo metodo da classe
        throw new Error ("Metodo sacar da Conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
    } 
        return 0;
    }

    depositar(valor){
        if (valor <= 0){
            return;
        }
        
        this._saldo += valor;
    }

    transferir(contaDestino, valor){
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valor);
    }
}