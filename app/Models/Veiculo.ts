import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Marca from './Marca'
import Tipo from './Tipo'
import Venda from './Venda'
import Concessionaria from './Concessionaria'

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public concessionariaId: number

  @column()
  public tipoId: number

  @column()
  public marcaId: number

  @column()
  public vendaId: number

  @column()
  public modelo: string

  @column()
  public ano: number

  @column()
  public preco: number

  @column()
  public estoque: number

  @column()
  public cor: string

  @column()
  public combustivel: string

  @column()
  public qtdPassageiros: number

  @column()
  public cambio: string

  @column()
  public cilindrada: number

  @column()
  public potencia: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Marca)
  public marca: BelongsTo<typeof Marca>

  @belongsTo(() => Tipo)
  public tipo: BelongsTo<typeof Tipo>

  @belongsTo(() => Venda)
  public venda: BelongsTo<typeof Venda>

  @belongsTo(() => Concessionaria)
  public concessionaria: BelongsTo<typeof Concessionaria>
}
