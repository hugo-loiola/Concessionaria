import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'concessionarias'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 100).notNullable()
      table.string('cnpj', 14).notNullable()
      table.string('endereco', 100).notNullable()
      table.integer('numero').notNullable()
      table.string('telefone').notNullable()
      table.string('complemento').notNullable()
      table.string('bairro', 100).notNullable()
      table.string('cidade', 50).notNullable()
      table.string('uf', 2).notNullable()

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
