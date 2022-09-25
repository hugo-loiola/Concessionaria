import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "vendas";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("veiculo_id", 50)
        .unsigned()
        .references("id")
        .inTable("veiculos")
        .notNullable();
      table
        .integer("cliente_id")
        .unsigned()
        .references("id")
        .inTable("clientes")
        .notNullable();
      table
        .integer("funcionario_id", 1)
        .unsigned()
        .references("id")
        .inTable("funcionarios")
        .notNullable();
      table
        .integer("concessionaria_id", 50)
        .unsigned()
        .references("id")
        .inTable("concessionarias")
        .notNullable();
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
