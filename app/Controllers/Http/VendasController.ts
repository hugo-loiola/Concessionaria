// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from 'App/Models/Venda'

export default class VendasController {
  async index() {
    return await Venda.query()
      .preload('Veiculo')
      .preload('cliente')
      .preload('concessionaria')
      .preload('funcionario')
  }
  async store({ request }) {
    const dados = await request.only([
      'veiculoId',
      'clienteId',
      'funcionarioId',
      'concessionariaId',
    ])
    return await Venda.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Venda.findOrFail(id)
  }

  async destroy({ request }) {
    const id = request.param('id')
    const venda = await Venda.findOrFail(id)
    return venda.delete()
  }

  async update({ request }) {
    const id = request.param('id')
    const venda = await Venda.findOrFail(id)

    const dados = await request.only([
      'veiculoId',
      'clienteId',
      'funcionarioId',
      'concessionariaId',
    ])

    venda.merge(dados).save()

    return venda
  }
}
