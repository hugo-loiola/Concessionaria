// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Concessionaria from 'App/Models/Concessionaria'
import ConcessionariaUpdateValidator from 'App/Validators/ConcessionariaUpdateValidator'
import ConcessonariaValidator from 'App/Validators/ConcessonariaValidator'

export default class ConcessionariasController {
  async index() {
    return await Concessionaria.query()
      .preload('funcionarios')
      .preload('clientes')
      .preload('veiculos')
      .preload('vendas')
  }
  async store({ request }) {
    const dados = await request.validate(ConcessonariaValidator)

    return Concessionaria.create(dados)
  }
  async show({ request }) {
    const id = await request.param('id')
    return await Concessionaria.findOrFail(id)
  }

  async destroy({ request }) {
    const id = await request.param('id')
    const concessionaria = await Concessionaria.findOrFail(id)
    concessionaria.delete()
    return 'Concessionaria deletada com sucesso!'
  }

  async update({ request }) {
    const id = await request.param('id')
    const concessionaria = await Concessionaria.findOrFail(id)

    const dados = await request.validate(ConcessionariaUpdateValidator)

    concessionaria.merge(dados).save()

    return concessionaria
  }
}
