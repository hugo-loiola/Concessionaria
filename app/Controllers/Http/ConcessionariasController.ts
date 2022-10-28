// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Concessionaria from 'App/Models/Concessionaria'

export default class ConcessionariasController {
  async index() {
    return await Concessionaria.query()
      .preload('clientes')
      .preload('funcionarios')
      .preload('marcas')
      .preload('tipos')
      .preload('veiculos')
      .preload('vendas')
  }
  async store({ request }) {
    const dados = await request.only([
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
    return Concessionaria.create(dados)
  }
  async show({ request }) {
    const id = await request.param('id')
    return await Concessionaria.findOrFail(id)
  }

  async destroy({ request }) {
    const id = await request.param('id')
    const concessionaria = await Concessionaria.findOrFail(id)
    return concessionaria.delete()
  }

  async update({ request }) {
    const id = await request.param('id')
    const concessionaria = await Concessionaria.findOrFail(id)

    const dados = await request.only([
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
