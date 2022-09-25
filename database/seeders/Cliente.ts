import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cliente from "App/Models/Cliente";

export default class extends BaseSeeder {
  public async run() {
    await Cliente.createMany([
      {
        concessionariaId: 1,
        cpf: "05889054104",
        nome: "Diogo Sales",
        email: "diogodobu@gmail.com",
        dataNascimento: new Date(2003, 08, 10),
        sexo: "M",
        telefone: "(61) 984212998",
        endereco: "QR 207 conjunto 06",
        numero: 19,
        complemento: "Casa 19",
        bairro: "Samambaia Norte",
        cidade: "Samambaia",
        uf: "DF",
        cep: 72341306,
      },
    ]);
  }
}
