import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VeiculoUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    concessionariaId: schema.number.optional([
      rules.exists({ table: 'concessionarias', column: 'id' }),
    ]),
    tipoId: schema.number.optional([rules.exists({ table: 'tipos', column: 'id' })]),
    marcaId: schema.number.optional([rules.exists({ table: 'marcas', column: 'id' })]),
    vendaId: schema.number.optional([rules.exists({ table: 'vendas', column: 'id' })]),
    modelo: schema.string.optional([rules.maxLength(50)]),
    ano: schema.number.optional([rules.maxLength(4)]),
    cor: schema.string.optional([rules.maxLength(100)]),
    combustivel: schema.string.optional([rules.alpha(), rules.maxLength(100)]),
    qtdPassageiros: schema.number.optional(),
    cambio: schema.string.optional([rules.maxLength(50)]),
    cilindrada: schema.number.optional(),
    potencia: schema.number.optional([rules.maxLength(100)]),
  })

  public messages: CustomMessages = {}
}
