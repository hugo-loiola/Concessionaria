// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Concessionaria from "App/Models/Concessionaria";

export default class ConcessionariasController {
  index() {
    return Concessionaria.all();
  }
  store({ request }) {
    const dados = request.only([
      "cnpj",
      "endereco",
      "numero",
      "telefone",
      "complemento",
      "bairro",
      "cidade",
      "uf",
      "qtdVendas",
    ]);
    return Concessionaria.create(dados);
  }
}
