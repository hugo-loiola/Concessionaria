import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Veiculo from 'App/Models/Veiculo'

export default class extends BaseSeeder {
  public async run() {
    await Veiculo.createMany([
      {
        concessionariaId: 1,
        tipoId: 1,
        marcaId: 1,
        vendaId: 1,
        modelo: 'Nivus',
        ano: 2022,
        preco: 140000.0,
        cor: 'Cinza Platinum',
        combustivel: 'Flex',
        qtdPassageiros: 5,
        cambio: 'Automatico',
        potencia: 128,
      },
    ])
  }
}
