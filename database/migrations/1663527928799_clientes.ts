import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "clientes";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .string("concessionaria_id", 50)
        .unsigned()
        .references("id")
        .inTable("concessionarias")
        .notNullable();
      table.string("cpf", 11).notNullable();
      table.string("nome", 100).notNullable();
      table.string("email", 100).notNullable();
      table.date("data_nascimento").notNullable();
      table.string("sexo");
      table.string("telefone", 15).notNullable();
      table.string("endereco", 100).notNullable();
      table.integer("numero", 20).notNullable();
      table.string("complemento", 100);
      table.string("bairro", 100).notNullable();
      table.string("cidade", 100).notNullable();
      table.string("uf", 2).notNullable();
      table.integer("cep", 8).notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
