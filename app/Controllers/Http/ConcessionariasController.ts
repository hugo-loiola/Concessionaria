// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Concessionaria from 'App/Models/Concessionaria'

export default class ConcessionariasController {
  index() {
    return Concessionaria.all()
  }
  store({ request }) {
    const dados = request.only([
      'cnpj',
      'endereco',
      'numero',
      'telefone',
      'complemento',
      'bairro',
      'cidade',
      'uf',
    ])
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

    const dados = request.only([
      'cnpj',
      'endereco',
      'numero',
      'telefone',
      'complemento',
      'bairro',
      'cidade',
      'uf',
      'qtdVendas',
    ])

    concessionaria.merge(dados).save()

    return concessionaria
  }
}
