import Cliente from "App/Models/Cliente";
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClientesController {
  index() {
    return Cliente.all();
  }
  store({ request }) {
    const dados = request.only([
      "concessionariaId",
      "cpf",
      "nome",
      "email",
      "dataNascimento",
      "sexo",
      "telefone",
      "endereco",
      "numero",
      "complemento",
      "bairro",
      "cidade",
      "uf",
      "cep",
    ]);
    return Cliente.create(dados);
  }
}
