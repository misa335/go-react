exports.up = function(knex) {
  return knex.schema.table("locations", (table) => {
    table.string("phoneNumber");
  });
};

exports.down = function(knex) {
  return knex.schema.table("locations", (table) => {
    table.dropColumn("phoneNumber");
  });
};
