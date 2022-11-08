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
Route.resource("/cursos", "CursosController").apiOnly();
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
  .integer("concessionaria_id")
  .unsigned()
  .references("id")
  .inTable("concessionarias")
  .notNullable();
```

### Codigo de um Model

```js
import { DateTime } from "luxon";
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
} from "@ioc:Adonis/Lucid/Orm";
import Motorista from "./Motorista";
import Carga from "./Carga";

export default class Caminhao extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public motoristaId: number;

  @column()
  public modelo: string;

  @column()
  public cabine: string;

  @column()
  public marca: string;

  @column()
  public placa: string;

  @column()
  public cor: string;

  @column()
  public tipoCaminhao: string;

  @column()
  public potencia: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Motorista)
  public motorista: BelongsTo<typeof Motorista>;

  @hasMany(() => Carga)
  public carga: HasMany<typeof Carga>;
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
  public async run () {
    await Funcionario.createMany([
      {
        concessionariaId:1,
        matricula: '12345',
        cpf:'001.002.003-04',
        salario: 2500,
        nome: 'Hugo',
        email: 'hugo@gmail.com',
        idade: 20,
        telefone: 61991862235,
        endereco: 'QNO 7 Conjunto F',
      }
    ])
    // Write your database queries inside the run method
  }
}
```
### Rodar uma seeder

    node ace db:seed
    
### Criando um Controller.

    node ace make:controller [Nome]

### Codigo de uma rota com Controller
```js
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno";

export default class AlunosController {
  index() {
    return Aluno.all();
  }

  store({ request }) {
    const dados = request.only([
      "nome",
      "cpf",
      "matricula",
      "email",
      "telefone",
      "cep",
      "logradouro",
      "complemento",
      "numero",
      "bairro",
    ]);
    return Aluno.create(dados);
  }

  show({ request }) {
    const id = request.param("id");
    return Aluno.findOrFail(id);
  }

  async destroy({ request }) {
    const id = request.param("id");
    const aluno = await Aluno.findOrFail(id);
    return aluno.delete();
  }

  async update({ request }) {
    const id = request.param("id");
    const aluno = await Aluno.findOrFail(id);

    const dados = request.only([
      "nome",
      "cpf",
      "matricula",
      "email",
      "telefone",
      "cep",
      "logradouro",
      "complemento",
      "numero",
      "bairro",
    ]);

    aluno.merge(dados).save();

    return aluno;
  }
}

```

### Criando Validator

    node ace make:validator [Nome]

### Exemplo de Validator

```js
import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AlunoValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([rules.maxLength(100)]),
    cpf: schema.number.optional([
      rules.unique({ table: "alunos", column: "cpf" }),
    ]),
    matricula: schema.string([
      rules.minLength(20),
      rules.maxLength(20),
      rules.unique({ table: "alunos", column: "matricula" }),
    ]),
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(100),
      rules.unique({ table: "alunos", column: "email" }),
    ]),
    telefone: schema.string.optional([
      rules.range(11, 15),
      rules.unique({ table: "alunos", column: "telefone" }),
    ]),
    cep: schema.string.optional(),
    logradouro: schema.string.optional([rules.maxLength(100)]),
    complemento: schema.string.optional([rules.maxLength(100)]),
    numero: schema.string.optional([rules.maxLength(20)]),
    bairro: schema.string.optional([rules.maxLength(100)]),
  });

  public messages: CustomMessages = {};
}
```

### Instalando Autentificador

    npm i @adonisjs/auth

### Configurando Autentificador
    
```bash
node ace configure @adonisjs/auth
# Lucid
# API token
# User
# Yes
# Database
# Yes
npm i phc-argon2
```
