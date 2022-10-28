import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Concessionaria from './Concessionaria'
import Funcionario from './Funcionario'
import Veiculo from './Veiculo'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public veiculoId: number

  @column()
  public clienteId: number

  @column()
  public funcionarioId: number

  @column()
  public concessionariaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>

  @belongsTo(() => Concessionaria)
  public concessionaria: BelongsTo<typeof Concessionaria>

  @belongsTo(() => Veiculo)
  public Veiculo: BelongsTo<typeof Veiculo>
}
