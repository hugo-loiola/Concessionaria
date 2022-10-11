import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Concessionaria extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public cnpj: string;

  @column()
  public endereco: string;

  @column()
  public numero: number;

  @column()
  public telefone: string;

  @column()
  public complemento: string;

  @column()
  public bairro: string;

  @column()
  public cidade: string;

  @column()
  public uf: string;

  @column()
  public qtdVendas: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
