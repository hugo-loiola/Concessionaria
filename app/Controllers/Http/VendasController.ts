// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Venda from 'App/Models/Venda'
import VendaUpdateValidator from 'App/Validators/VendaUpdateValidator'
import VendaValidator from 'App/Validators/VendaValidator'

export default class VendasController {
  async index() {
    return await Venda.query()
      .preload('cliente')
      .preload('concessionaria')
      .preload('funcionario')
      .preload('Veiculos')
  }
  async store({ request }) {
    const dados = await request.validate(VendaValidator)
    return await Venda.create(dados)
  }
  async show({ request }) {
    const id = await request.param('id')
    return await Venda.findOrFail(id)
  }

  async destroy({ request }) {
    const id = await request.param('id')
    const venda = await Venda.findOrFail(id)
    venda.delete()
    return 'Venda deletada com sucesso!'
  }

  async update({ request }) {
    const id = await request.param('id')
    const venda = await Venda.findOrFail(id)

    const dados = await request.validate(VendaUpdateValidator)

    venda.merge(dados).save()

    return venda
  }
}
