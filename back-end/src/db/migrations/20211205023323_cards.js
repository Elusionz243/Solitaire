
exports.up = function(knex) {
  return knex.schema.createTable("cards", (table) => {
    table.increments("card_id").primary();
    table.string("card_name").notNullable();
    table.string("card_suit").notNullable();
    table.string("card_img").notNullable();
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("cards");
};
