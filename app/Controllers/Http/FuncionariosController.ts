import Funcionario from 'App/Models/Funcionario'
import FuncionarioValidator from 'App/Validators/FuncionarioValidator'

export default class FuncionariosController {
  // Ver todos os funcionarios
  async index() {
    return await Funcionario.query().preload('vendas').preload('concessionaria')
  }
  // Criar um funcionario
  async store({ request }) {
    const dados = await request.validate(FuncionarioValidator)
    return await Funcionario.create(dados)
  }
  // Ver um funcionario em específico
  async show({ request }) {
    const id = request.param('id')
    return await Funcionario.findOrFail(id)
  }
  // Deletar um funcionario
  async destroy({ request }) {
    const id = request.param('id')
    const funcionario = await Funcionario.findOrFail(id)

    return await funcionario.delete()
  }
  // Alterar um funcionario existente
  async update({ request }) {
    const id = request.param('id')
    const funcionario = await Funcionario.findOrFail(id)
    const dados = await request.validate(FuncionarioValidator)

    funcionario.merge(dados)

    return await funcionario.save()
  }
}
