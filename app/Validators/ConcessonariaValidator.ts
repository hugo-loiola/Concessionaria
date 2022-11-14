import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConcessonariaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.maxLength(100)]),
    cnpj: schema.string([
      rules.maxLength(18),
      rules.unique({ table: 'concessionarias', column: 'cnpj' }),
    ]),
    endereco: schema.string.optional([rules.maxLength(100)]),
    telefone: schema.string([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
      rules.mobile({ locale: ['pt-BR'] }),
      rules.unique({ table: 'clientes', column: 'telefone' }),
    ]),
    numero: schema.number(),
    complemento: schema.string.optional([]),
    bairro: schema.string.optional([rules.maxLength(100)]),
    cidade: schema.string.optional([rules.maxLength(50)]),
    uf: schema.string.optional([rules.maxLength(2)]),
  })

  public messages: CustomMessages = {}
}
