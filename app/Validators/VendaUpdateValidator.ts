import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    clienteId: schema.number.optional([rules.exists({ table: 'clientes', column: 'id' })]),
    funcionarioId: schema.number.optional([rules.exists({ table: 'funcionarios', column: 'id' })]),
    concessionariaId: schema.number.optional([
      rules.exists({ table: 'concessionarias', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {}
}
