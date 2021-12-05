const request = require("supertest");

const app = require("../src/app");
const knex = require("../src/db/connection");

describe("Main test name, example -> US-01 returns a list from the database", () => {
  
  beforeAll(async () => {
    await knex.migrate.forceFreeMigrationsLock();
    await knex.migrate.rollback(null, true);
    return await knex.migrate.latest();
  });

  beforeEach(async () => {
    return await knex.seed.run();
  });

  afterAll(async () => {
    return await knex.migrate.rollback(null, true).then(() => knex.destroy());
  });

  describe("Test name, example -> /GET /<route>", () => {
    
    test("test title, example -> returns 404 for non-existent route", async () => {
      
    });

  });

});
