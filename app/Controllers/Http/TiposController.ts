import Tipo from 'App/Models/Tipo'
import TipoValidator from 'App/Validators/TipoValidator'

export default class TiposController {
  async index() {
    return await Tipo.query().preload('veiculo')
  }

  async store({ request }) {
    const dados = await request.validate(TipoValidator)
    return await Tipo.create(dados)
  }

  async show({ request }) {
    const id = await request.param('id')
    return await Tipo.findOrFail(id)
  }

  async destroy({ request }) {
    const id = await request.param('id')
    const tipo = await Tipo.findOrFail(id)
    return tipo.delete()
  }

  async update({ request }) {
    const id = await request.param('id')
    const tipo = await Tipo.findOrFail(id)

    const dados = await request.validate(TipoValidator)

    tipo.merge(dados).save()

    return tipo
  }
}
