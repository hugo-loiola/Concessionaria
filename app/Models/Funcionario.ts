import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  hasMany,
  HasMany,
  HasOne,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Venda from './Venda'
import Concessionaria from './Concessionaria'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public concessionariaId: number

  @column()
  public matricula: string

  @column()
  public cpf: string

  @column()
  public salario: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public idade: number

  @column()
  public telefone: number

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

  @column()
  public qtdVendas: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Venda)
  public vendas: HasMany<typeof Venda>

  @belongsTo(() => Concessionaria)
  public concessionaria: BelongsTo<typeof Concessionaria>
}
