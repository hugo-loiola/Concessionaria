# Concessionária

### Iniciar um projeto.

    npm init adonis-ts-app@latest [nome]

### Instalando o `lucid` para o baco de dados.

    npm i @adonisjs/lucid

### Configurando o `lucid`.

    node ace configure @adonisjs/lucid

### Start o servidor de desenvolvimento.

    node ace serve --watch

### Criar Model e Migration

    node ace make:model [nome] -m

### Rota

```ts
Route.resource('/cursos', 'CursosController').apiOnly()
```

### Código de uma migration

```js
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cursos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 50).notNullable()
      table.integer('duracao')
      table.string('modalidade',1).notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
```

### Exemplo de chave estrangeira

```js
table
  .integer('concessionaria_id')
  .unsigned()
  .references('id')
  .inTable('concessionarias')
  .notNullable()
```

### Codigo de um Model

```js
import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Curso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public duracao: number

  @column()
  public modalidade: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
```

### Rodar as Migration

    node ace migration:run

### Voltar as Migration

    node ace migration:rollback
    ou
    node ace migration:refresh

### Voltar as Migration ao início

    node ace migration:reset

### Criar uma seeder

    node ace make:seeder [Nome]

## Código de uma seeder

```ts
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run() {
    await Funcionario.createMany([
      {
        concessionariaId: 1,
        matricula: '12345',
        cpf: '001.002.003-04',
        salario: 2500,
        nome: 'Hugo',
        email: 'hugo@gmail.com',
        idade: 20,
        telefone: 61991862235,
        endereco: 'QNO 7 Conjunto F',
      },
    ])
    // Write your database queries inside the run method
  }
}
```

### Rodar uma seeder

    node ace db:seed

### Criando um Controller.

    node ace make:controller [Nome]

### Codigo de uma rota com Controller e Validator

```js
import Aluno from 'App/Models/Aluno'
import AlunoValidator from 'App/Validators/AlunoValidator'

export default class AlunosController {
  index() {
    return Aluno.all()
  }

  store({ request }) {
    const dados = await request.validate(AlunoValidator)
    return Aluno.create(dados)
  }

  show({ request }) {
    const id = request.param('id')
    return Aluno.findOrFail(id)
  }

  async destroy({ request }) {
    const id = request.param('id')
    const aluno = await Aluno.findOrFail(id)
    return aluno.delete()
  }

  async update({ request }) {
    const id = request.param('id')
    const aluno = await Aluno.findOrFail(id)

    const dados = await request.validate(AlunoValidator)

    aluno.merge(dados).save()

    return aluno
  }
}
```

### Criar um Validator

    node ace create:validator [nome]

### Exemplo de Validator

```ts
export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),

    cpf: schema.number.optional([
      rules.unique({ table: 'alunos', column: 'id' }),
      rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/),
    ]),

    matricula: schema.string([
      rules.unique({
        column: 'matricula',
        table: 'alunos',
      }),
      rules.alphaNum(),
      rules.maxLength(20),
    ]),

    email: schema.string.optional([
      rules.email(),
      rules.unique({ table: 'alunos', column: 'email' }),
      rules.maxLength(100),
    ]),

    telefone: schema.string.optional([
      rules.regex(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/),
      rules.mobile({ locale: ['pt-BR'] }),
      rules.unique({ table: 'alunos', column: 'telefone' }),
    ]),

    cep: schema.string.optional([rules.regex(/[0-9]{5}-[\d]{3}/)]),

    logadouro: schema.string.optional([rules.alpha({ allow: ['space'] }), rules.maxLength(100)]),

    complemento: schema.string.optional([rules.maxLength(100), rules.alpha({ allow: ['space'] })]),

    numero: schema.string.optional([
      rules.unique({
        column: 'numero',
        table: 'alunos',
      }),
      rules.alphaNum({ allow: ['dash', 'space'] }),
      rules.maxLength(120),
    ]),

    bairro: schema.string.optional([rules.alpha({ allow: ['space'] }), rules.maxLength(120)]),
  })

  public messages: CustomMessages = {}
}
```
