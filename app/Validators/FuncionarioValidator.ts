import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FuncionarioValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    concessionariaId: schema.number([
      rules.unique({ table: 'concessionarias', column: 'id' }),
      rules.exists({ table: 'concessionarias', column: 'id' }),
    ]),

    matricula: schema.string([
      rules.alphaNum(),
      rules.maxLength(11),
      rules.unique({ table: 'funcionarios', column: 'matricula' }),
    ]),

    cpf: schema.string([
      rules.unique({ table: 'funcionarios', column: 'id' }),
      rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
    ]),
    salario: schema.number(),

    nome: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(50)]),

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

    qtdVendas: schema.number(),
  })

  public messages: CustomMessages = {
    'maxLength': 'O máximo de caractéres é de {{ options.maxLength }} no campo {{ field }}',
    'minLength': 'O mínimo de caractéres é de {{ options.minLength }}.',
    'required': 'o campo {{ field }} é obrigatório.',
    'concessionaria_id.unique': 'O id de concessionaria tem que ser único.',
    'cpf.unique': 'o cpf tem que ser único.',
    'cpf.regex': 'o cpf tem usar o padrão 000.111.222-33',
    'telefone.regex': 'o telefone tem que usar o padrão (11)9999-9999',
  }
}
