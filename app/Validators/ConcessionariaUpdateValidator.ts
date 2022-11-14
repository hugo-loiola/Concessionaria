import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConcessionariaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cnpj: schema.string.optional([
      rules.maxLength(18),
      rules.unique({ table: 'concessionarias', column: 'cnpj' }),
    ]),
    endereco: schema.string.optional([rules.maxLength(100)]),
    numero: schema.number.optional(),
    complemento: schema.string.optional([]),
    bairro: schema.string.optional([rules.maxLength(100)]),
    cidade: schema.string.optional([rules.maxLength(50)]),
    uf: schema.string.optional([rules.maxLength(2)]),
  })

  public messages: CustomMessages = {}
}
