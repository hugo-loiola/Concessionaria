import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class VendaValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    veiculoId: schema.number([rules.exists({ table: 'veiculos', column: 'id' })]),
    clienteId: schema.number([rules.exists({ table: 'clientes', column: 'id' })]),
    funcionarioId: schema.number([rules.exists({ table: 'funcionario', column: 'id' })]),
    concessionariaId: schema.number([rules.exists({ table: 'concessionaria', column: 'id' })]),
  })

  public messages: CustomMessages = {}
}
