import Marca from 'App/Models/Marca'
import MarcaValidator from 'App/Validators/MarcaValidator'

export default class MarcasController {
  async index() {
    return await Marca.query().preload('veiculo')
  }

  async store({ request }) {
    const dados = await request.validate(MarcaValidator)
    return await Marca.create(dados)
  }

  async show({ request }) {
    const id = await request.param('id')
    return await Marca.findOrFail(id)
  }

  async destroy({ request }) {
    const id = await request.param('id')
    const marca = await Marca.findOrFail(id)
    return marca.delete()
  }

  async update({ request }) {
    const id = await request.param('id')
    const marca = await Marca.findOrFail(id)
    const dados = await request.validate(MarcaValidator)
    marca.merge(dados).save()

    return marca
  }
}
