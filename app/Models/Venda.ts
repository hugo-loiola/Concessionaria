import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public veiculoId: number;

  @column()
  public clienteId: number;

  @column()
  public funcionarioId: number;

  @column()
  public concessionariaId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
