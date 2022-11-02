import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MarcaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(50),
      rules.unique({ table: 'tipos', column: 'nome' }),
    ]),
  })

  public messages: CustomMessages = {}
}
