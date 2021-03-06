const knex = require("knex");
require("dotenv").config();

const parse = require("pg-connection-string").parse;
let pgconfig = null;
if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

const db = knex({
  client: "pg",
  connection:
    pgconfig ||
    `postgres://${process.env.USER}:${process.env.PASSWORD}@127.0.0.1:5432/truckstop`,
  searchPath: "public",
});

module.exports = db;
