import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaDeAutenticacao} from "./SistemaDeAutenticacao.js";



const contaKaique = new Cliente("Kaique", 44562619864); //precisa de um construtor

const diretor = new Diretor("Kaique", 10000, 44562619864);
const gerente = new Gerente("KaiqueG", 5000, 44545454445);

diretor.cadastraSenha("123456");
gerente.cadastraSenha("123");

const estaLogado = SistemaDeAutenticacao.login(gerente, "123");

console.log(diretor);
console.log(gerente);
console.log(estaLogado);

