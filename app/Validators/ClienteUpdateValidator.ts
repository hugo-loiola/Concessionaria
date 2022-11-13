import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    concessionariaId: schema.number.optional([
      rules.exists({ table: 'concessionarias', column: 'id' }),
    ]),
    cpf: schema.string.optional([
      rules.regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/),
      rules.unique({ table: 'clientes', column: 'cpf' }),
    ]),
    nome: schema.string.optional([rules.maxLength(100)]),
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(100),
      rules.unique({ table: 'alunos', column: 'email' }),
    ]),
    dataNascimento: schema.date.optional(),
    sexo: schema.string.optional([rules.maxLength(1), rules.alpha()]),
    telefone: schema.string.optional([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
      rules.mobile({ locale: ['pt-BR'] }),
      rules.unique({ table: 'alunos', column: 'telefone' }),
    ]),
    endereco: schema.string.optional([rules.maxLength(100), rules.alpha({ allow: ['space'] })]),
    numero: schema.number.optional(),
    complemento: schema.string.optional([rules.maxLength(100), rules.alpha({ allow: ['space'] })]),
    bairro: schema.string.optional([
      rules.alpha({ allow: ['space', 'dash'] }),
      rules.maxLength(100),
    ]),
    cidade: schema.string.optional([
      rules.alpha({ allow: ['space', 'dash'] }),
      rules.maxLength(50),
    ]),
    uf: schema.string.optional([rules.alpha(), rules.maxLength(2)]),
    cep: schema.string.optional([rules.regex(/[0-9]{5}-[\d]{3}/)]),
  })

  public messages: CustomMessages = {}
}
