import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    concessionariaId: schema.number.optional([
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
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(50),
      rules.unique({ table: 'funcionarios', column: 'email' }),
    ]),
    idade: schema.number.optional([rules.range(16, 90)]),
    telefone: schema.string.optional([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
      rules.mobile({ locale: ['pt-BR'] }),
      rules.unique({ table: 'funcionarios', column: 'telefone' }),
    ]),
    endereco: schema.string.optional([rules.maxLength(100)]),
    numero: schema.number.optional(),
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
    'concessionaria_id.unique': 'O id de concessionaria tem que ser único.',
    'unique': 'o {{ field }} tem que ser único.',
    'cpf.regex': 'o cpf tem usar o padrão 000.111.222-33',
    'telefone.regex': 'o telefone tem que usar o padrão (11)9999-9999',
  }
}
