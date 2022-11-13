import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    veiculoId: schema.number.optional([rules.exists({ table: 'veiculos', column: 'id' })]),
    clienteId: schema.number.optional([rules.exists({ table: 'clientes', column: 'id' })]),
    funcionarioId: schema.number.optional([rules.exists({ table: 'funcionario', column: 'id' })]),
    concessionariaId: schema.number.optional([
      rules.exists({ table: 'concessionaria', column: 'id' }),
    ]),
  })

  public messages: CustomMessages = {}
}
