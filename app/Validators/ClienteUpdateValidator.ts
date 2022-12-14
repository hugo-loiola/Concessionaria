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
      rules.unique({ table: 'clientes', column: 'email' }),
    ]),
    dataNascimento: schema.date.optional(),
    sexo: schema.string.optional([rules.maxLength(1), rules.alpha()]),
    telefone: schema.string.optional([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
      rules.mobile({ locale: ['pt-BR'] }),
      rules.unique({ table: 'clientes', column: 'telefone' }),
    ]),
    endereco: schema.string.optional([rules.maxLength(100)]),
    numero: schema.number(),
    complemento: schema.string.optional([rules.maxLength(100)]),
    bairro: schema.string.optional([rules.maxLength(100)]),
    cidade: schema.string.optional([rules.maxLength(50)]),
    uf: schema.string.optional([rules.alpha(), rules.maxLength(2)]),
    cep: schema.string.optional([rules.regex(/[0-9]{5}-[\d]{3}/)]),
  })

  public messages: CustomMessages = {
    'maxLength': 'O máximo de caractéres é de {{ options.maxLength }} no campo {{ field }}',
    'minLength': 'O mínimo de caractéres é de {{ options.minLength }}.',
    'required': 'o campo {{ field }} é obrigatório.',
    'concessionariaId.unique': 'O id de concessionaria tem que ser único.',
    'cpf.unique': 'o cpf tem que ser único.',
    'cpf.regex': 'o cpf tem usar o padrão 000.111.222-33',
    'telefone.regex': 'o telefone tem que usar o padrão (00)11111-1111',
  }
}
