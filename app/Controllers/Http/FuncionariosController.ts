import Funcionario from "App/Models/Funcionario";

export default class FuncionariosController {
  // Ver todos os funcionarios
  async index() {
    return await Funcionario.query()
      .preload("vendas")
      .preload("concessionaria");
  }
  // Criar um funcionario
  async store({ request }) {
    const dados = request.only([
      "concessionariaId",
      "matricula",
      "cpf",
      "salario",
      "nome",
      "email",
      "idade",
      "telefone",
      "endereco",
      "numero",
      "complemento",
      "bairro",
      "cidade",
      "uf",
      "cep",
      "qtdVendas",
    ]);
    return await Funcionario.create(dados);
  }
  // Ver um funcionario em específico
  async show({ request }) {
    const id = request.param("id");
    return await Funcionario.findOrFail(id);
  }
  // Deletar um funcionario
  async destroy({ request }) {
    const id = request.param("id");
    const funcionario = await Funcionario.findOrFail(id);

    return await funcionario.delete();
  }
  // Alterar um funcionario existente
  async update({ request }) {
    const id = request.param("id");
    const funcionario = await Funcionario.findOrFail(id);
    const dados = request.only([
      "concessionariaId",
      "matricula",
      "cpf",
      "salario",
      "nome",
      "email",
      "idade",
      "telefone",
      "endereco",
      "numero",
      "complemento",
      "bairro",
      "cidade",
      "uf",
      "cep",
      "qtdVendas",
    ]);

    funcionario.merge(dados);

    return await funcionario.save();
  }
}
