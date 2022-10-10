import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public concessionariaId: number;

  @column()
  public tipoId: number;

  @column()
  public marcaId: number;

  @column()
  public modelo: string;

  @column()
  public ano: number;

  @column()
  public preco: number;

  @column()
  public estoque: number;

  @column()
  public cor: string;

  @column()
  public combustivel: string;

  @column()
  public qtdPassageiros: number;

  @column()
  public cambio: string;

  @column()
  public cilindrada: number;

  @column()
  public potencia: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
