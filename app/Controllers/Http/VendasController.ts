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
  show({ request }) {
    const id = request.param("id");
    return Venda.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const venda = await Venda.findOrFail(id);
    return venda.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const venda = await Venda.findOrFail(id);

    const dados = request.only([
      "veiculoId",
      "clienteId",
      "funcionarioId",
      "concessionariaId",
    ]);

    venda.merge(dados).save();

    return venda;
  }
}
