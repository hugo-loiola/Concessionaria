// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from "App/Models/Venda";

export default class VendasController {
  index() {
    return Venda.all();
  }
  store({ request }) {
    const dados = request.only([
      "veiculoId",
      "clienteId",
      "funcionarioId",
      "concessionariaId",
    ]);
    return Venda.create(dados);
  }
}
