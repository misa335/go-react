exports.up = function(knex) {
  return knex.schema.createTable("locations", (table) => {
    table.integer("id").notNullable();

    table.text("amenities");

    table.float("latitude");

    table.float("longitude");

    table.string("name").notNullable();

    table.text("fuelPrices");

    table.string("highway");

    table.text("address");

    table.string("exitNumber");

    table.string("restaurants");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("locations");
};
