const request = require("supertest");

const app = require("../src/app");
const knex = require("../src/db/connection");

describe("Main test name, example -> US-01 returns a list from the database", () => {
  
  beforeAll(() => {
    return knex("<table_name>").migrate
      .forceFreeMigrationsLock()
      .then(() => knex.migrate.rollback(null, true))
      .then(() => knex.migrate.latest());
  });

  beforeEach(() => {
    return knex.seed.run();
  });

  afterAll(async () => {
    return await knex.migrate.rollback(null, true).then(() => knex.destroy());
  });

  describe("Test name, example -> /GET /<route>", () => {
    
    test("test title, example -> returns 404 for non-existent route", async () => {
      
    });

  });

});
