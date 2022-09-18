import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Concessionaria extends BaseModel {
 @column()
  public veiculo: number 

  @column()
  public cliente: number

  @column()
  public funcionario: number

  @column()
  public venda: number

  @column()
  public cnpj: string

  @column()
  public endereco: string

  @column()
  public numero: number

  @column()
  public bairro: string

  @column()
  public cidade: string

  @column()
  public uf: string

  @column()
  public qtdVendas: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
