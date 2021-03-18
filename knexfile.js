require("dotenv").config();

const parse = require("pg-connection-string").parse;
let pgconfig = null;
if (process.env.DATABASE_URL) {
  pgconfig = parse(process.env.DATABASE_URL);
  pgconfig.ssl = { rejectUnauthorized: false };
}

module.exports = {
  development: {
    client: "pg",
    connection:
      pgconfig ||
      `postgres://${process.env.USER}:${process.env.PASSWORD}@127.0.0.1:5432/truckstop`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: ".server/migrations",
    },
    seeds: {
      directory: "./data",
    },
  },

  staging: {
    client: "pg",
    connection:
      pgconfig || `postgres://${process.env.USER}@127.0.0.1:5432/truck_stops`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./server/migrations",
    },
  },

  production: {
    client: "pg",
    connection:
      pgconfig || `postgres://${process.env.USER}@127.0.0.1:5432/truck_stops`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./server/migrations",
    },
  },
};
