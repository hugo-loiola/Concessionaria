import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    concessionariaId: schema.number.optional([
      rules.unique({ table: 'concessionarias', column: 'id' }),
      rules.exists({ table: 'concessionarias', column: 'id' }),
    ]),
    matricula: schema.string.optional([
      rules.alphaNum(),
      rules.maxLength(11),
      rules.unique({ table: 'funcionarios', column: 'matricula' }),
    ]),
    cpf: schema.string.optional([
      rules.unique({ table: 'funcionarios', column: 'id' }),
      rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
    ]),
    salario: schema.number.optional(),
    nome: schema.string.optional([rules.alpha({ allow: ['space'] }), rules.maxLength(50)]),
    email: schema.string.nullableAndOptional([
      rules.email(),
      rules.maxLength(50),
      rules.unique({ table: 'funcionarios', column: 'email' }),
    ]),
    idade: schema.number.nullableAndOptional([rules.range(16, 90)]),
    telefone: schema.string.nullableAndOptional([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
      rules.mobile({ locale: ['pt-BR'] }),
      rules.unique({ table: 'funcionarios', column: 'telefone' }),
    ]),
    endereco: schema.string.nullableAndOptional([
      rules.maxLength(100),
      rules.alpha({ allow: ['space'] }),
    ]),
    numero: schema.number.nullableAndOptional(),
    complemento: schema.string.nullableAndOptional([
      rules.maxLength(100),
      rules.alpha({ allow: ['space'] }),
    ]),
    bairro: schema.string.nullableAndOptional([
      rules.alpha({ allow: ['space'] }),
      rules.maxLength(100),
    ]),
    cidade: schema.string.nullableAndOptional([rules.alpha(), rules.maxLength(50)]),
    uf: schema.string.nullableAndOptional([rules.alpha(), rules.maxLength(2)]),
    cep: schema.string.nullableAndOptional([rules.regex(/[0-9]{5}-[\d]{3}/)]),
    qtdVendas: schema.number.optional(),
  })

  public messages: CustomMessages = {}
}
