import Tipo from "App/Models/Tipo";

export default class TiposController {
  index() {
    return Tipo.all();
  }

  store({ request }) {
    const dados = request.only(["nome"]);
    return Tipo.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Tipo.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const tipo = await Tipo.findOrFail(id);
    return tipo.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const tipo = await Tipo.findOrFail(id);

    const dados = request.only(["nome"]);

    tipo.merge(dados).save();

    return tipo;
  }
}
