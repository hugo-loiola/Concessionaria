import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    clienteId: schema.number([rules.exists({ table: 'clientes', column: 'id' })]),
    funcionarioId: schema.number([rules.exists({ table: 'funcionarios', column: 'id' })]),
    concessionariaId: schema.number([rules.exists({ table: 'concessionarias', column: 'id' })]),
  })

  public messages: CustomMessages = {}
}
