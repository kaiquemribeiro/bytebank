import { Funcionario } from "./Funcionarios/Funcionarios.js";

export class SistemaDeAutenticacao extends Funcionario{
    static login(funcionario, _senha){
       return funcionario._senha == _senha;
    }
}