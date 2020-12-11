import { Funcionario } from "./Funcionarios/Funcionarios.js";

export class SistemaDeAutenticacao extends Funcionario{
    static login(autenticavel, senha){
        if (SistemaDeAutenticacao.eHAutenticavel(autenticavel)){
       return autenticavel.autenticar(senha);
    } 
        return false;
    }

    static eHAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }

}