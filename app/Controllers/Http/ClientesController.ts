import Cliente from 'App/Models/Cliente'
import ClienteValidator from 'App/Validators/ClienteValidator'
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClientesController {
  async index() {
    return await Cliente.query().preload('vendas').preload('concessionaria')
  }

  async store({ request }) {
    const dados = await request.validate(ClienteValidator)
    return await Cliente.create(dados)
  }

  async show({ request }) {
    const id = await request.param('id')
    return await Cliente.findOrFail(id)
  }

  async destroy({ request }) {
    const id = await request.param('id')
    const cliente = await Cliente.findOrFail(id)
    return cliente.delete()
  }

  async update({ request }) {
    const id = await request.param('id')
    const cliente = await Cliente.findOrFail(id)

    const dados = await request.validate(ClienteValidator)

    cliente.merge(dados).save()

    return cliente
  }
}
