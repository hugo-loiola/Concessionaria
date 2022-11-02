// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Concessionaria from 'App/Models/Concessionaria'
import ConcessionariaValidator from 'App/Validators/ConcessionariaValidator'

export default class ConcessionariasController {
  index() {
    return Concessionaria.all()
  }
  store({ request }) {
    const dados = request.validate(ConcessionariaValidator)
    return Concessionaria.create(dados)
  }
  show({ request }) {
    const id = request.param('id')
    return Concessionaria.findOrFail(id)
  }

  async destroy({ request }) {
    const id = request.param('id')
    const concessionaria = await Concessionaria.findOrFail(id)
    return concessionaria.delete()
  }

  async update({ request }) {
    const id = request.param('id')
    const concessionaria = await Concessionaria.findOrFail(id)

    const dados = request.validate(ConcessionariaValidator)

    concessionaria.merge(dados).save()

    return concessionaria
  }
}
