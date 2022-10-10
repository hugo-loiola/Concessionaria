import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Concessionaria from "App/Models/Concessionaria";

export default class extends BaseSeeder {
  public async run() {
    await Concessionaria.createMany([
      {
        cnpj: "73.925.034/0001-16",
        endereco: "Rua 12 cj C lote 12",
        numero: 12,
        telefone: "08007723331",
        complemento: "lote 12",
        bairro: "ceilandia",
        cidade: "Brasilia",
        uf: "DF",
        qtdVendas: 1,
      },
    ]);
  }
}
