import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Veiculo from './Veiculo'

export default class Marca extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Veiculo)
  public veiculos: HasMany<typeof Veiculo>
}
