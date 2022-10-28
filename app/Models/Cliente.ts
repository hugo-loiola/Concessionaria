import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Concessionaria from './Concessionaria'
import Venda from './Venda'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public concessionariaId: number

  @column()
  public cpf: string

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public dataNascimento: Date

  @column()
  public sexo: string

  @column()
  public telefone: string

  @column()
  public endereco: string

  @column()
  public numero: number

  @column()
  public complemento: string

  @column()
  public bairro: string

  @column()
  public cidade: string

  @column()
  public uf: string

  @column()
  public cep: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Concessionaria)
  public concessionaria: BelongsTo<typeof Concessionaria>

  @hasMany(() => Venda)
  public vendas: HasMany<typeof Venda>
}
