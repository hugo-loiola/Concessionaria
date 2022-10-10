import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "veiculos";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table
        .integer("concessionaria_id")
        .unsigned()
        .references("id")
        .inTable("concessionarias")
        .notNullable();
      table
        .integer("tipo_id")
        .unsigned()
        .references("id")
        .inTable("tipos")
        .notNullable();
      table
        .integer("marca_id")
        .unsigned()
        .references("id")
        .inTable("marcas")
        .notNullable();
      table.string("modelo", 50).notNullable();
      table.integer("ano", 4).notNullable();
      table.decimal("preco").notNullable();
      table.integer("estoque").notNullable();
      table.string("cor").notNullable();
      table.string("combustivel").notNullable();
      table.integer("qtd_passageiros");
      table.string("cambio", 50).notNullable();
      table.integer("cilindrada");
      table.integer("potencia").notNullable();

      table.timestamp("created_at", { useTz: true });
      table.timestamp("updated_at", { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
