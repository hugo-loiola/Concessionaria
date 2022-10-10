import Veiculo from "App/Models/Veiculo";

export default class VeiculosController {
  index() {
    return Veiculo.all();
  }

  store({ request }) {
    const dados = request.only([
      "concessionariaId",
      "tipoId",
      "marcaId",
      "modelo",
      "ano",
      "preco",
      "estoque",
      "cor",
      "combustivel",
      "qtdPassageiros",
      "cambio",
      "cilindrada",
      "potencia",
    ]);
    return Veiculo.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Veiculo.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const veiculos = await Veiculo.findOrFail(id);
    return veiculos.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const veiculos = await Veiculo.findOrFail(id);

    const dados = request.only([
      "concessionariaId",
      "tipoId",
      "marcaId",
      "modelo",
      "ano",
      "preco",
      "estoque",
      "cor",
      "combustivel",
      "qtdPassageiros",
      "cambio",
      "cilindrada",
      "potencia",
    ]);

    veiculos.merge(dados).save();

    return veiculos;
  }
}
