import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Funcionario from "App/Models/Funcionario";

export default class extends BaseSeeder {
  public async run() {
    await Funcionario.createMany([
      {
        concessionariaId: 1,
        matricula: "12345",
        cpf: "001.002.003-04",
        salario: 2500,
        nome: "Hugo",
        email: "hugo@gmail.com",
        idade: 20,
        telefone: 61991862235,
        endereco: "QNO 7 Conjunto F",
        numero: 5,
        complemento: "B",
        bairro: "Setor O",
        cidade: "Brasília",
        uf: "DF",
        cep: 1222997,
        qtdVendas: 5,
      },
    ]);
    // Write your database queries inside the run method
  }
}
