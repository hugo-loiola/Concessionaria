import Veiculo from 'App/Models/Veiculo'
import VeiculoValidator from 'App/Validators/VeiculoValidator'

export default class VeiculosController {
  async index() {
    return await Veiculo.query()
      .preload('concessionaria')
      .preload('marca')
      .preload('tipo')
      .preload('venda')
  }

  async store({ request }) {
    const dados = await request.validate(VeiculoValidator)
    return await Veiculo.create(dados)
  }

  async show({ request }) {
    const id = await request.param('id')
    return await Veiculo.findOrFail(id)
  }

  async destroy({ request }) {
    const id = await request.param('id')
    const veiculos = await Veiculo.findOrFail(id)
    return veiculos.delete()
  }

  async update({ request }) {
    const id = await request.param('id')
    const veiculos = await Veiculo.findOrFail(id)
    const dados = await request.validate(VeiculoValidator)
    veiculos.merge(dados).save()

    return veiculos
  }
}
