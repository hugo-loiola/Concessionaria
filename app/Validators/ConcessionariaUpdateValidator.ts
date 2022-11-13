import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConcessionariaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    cnpj: schema.string.optional([
      rules.maxLength(14),
      rules.unique({ table: 'concessionaria', column: 'cnpj' }),
    ]),
    endereco: schema.string.optional([rules.maxLength(100)]),
    numero: schema.number.optional([rules.unique({ table: 'concessionaria', column: 'numero' })]),
    complemento: schema.string.optional([]),
    bairro: schema.string.optional([rules.maxLength(100)]),
    cidade: schema.string.optional([rules.maxLength(50)]),
    uf: schema.string.optional([rules.maxLength(2)]),
  })

  public messages: CustomMessages = {}
}
