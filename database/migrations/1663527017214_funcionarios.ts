import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('concessionaria_id')
        .unsigned()
        .references('id')
        .inTable('concessionarias')
        .notNullable()
        .onDelete('CASCADE')
      table.string('matricula', 11).notNullable()
      table.string('cpf', 11).notNullable()
      table.float('salario').notNullable()
      table.string('nome', 50).notNullable()
      table.string('email', 50)
      table.integer('idade')
      table.string('telefone', 11)
      table.string('endereco', 100)
      table.integer('numero')
      table.string('complemento', 100)
      table.string('bairro', 100)
      table.string('cidade', 50)
      table.string('uf', 2)
      table.string('cep', 7)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
