import Veiculo from 'App/Models/Veiculo'

export default class VeiculosController {
  async index() {
    return await Veiculo.query()
      .preload('concessionaria')
      .preload('marca')
      .preload('tipo')
      .preload('venda')
  }

  async store({ request }) {
    const dados = await request.only([
      'concessionariaId',
      'tipoId',
      'marcaId',
      'modelo',
      'ano',
      'preco',
      'estoque',
      'cor',
      'combustivel',
      'qtdPassageiros',
      'cambio',
      'cilindrada',
      'potencia',
    ])
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

    const dados = await request.only([
      'concessionariaId',
      'tipoId',
      'marcaId',
      'modelo',
      'ano',
      'preco',
      'estoque',
      'cor',
      'combustivel',
      'qtdPassageiros',
      'cambio',
      'cilindrada',
      'potencia',
    ])

    veiculos.merge(dados).save()

    return veiculos
  }
}
