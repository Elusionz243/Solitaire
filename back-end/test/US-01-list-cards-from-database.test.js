const request = require("supertest");

const app = require("../src/app");
const knex = require("../src/db/connection");

describe("US-01 retrieve a list of cards from the database", () => {
  
  beforeAll(async () => {
    await knex.migrate.forceFreeMigrationsLock()
    await knex.migrate.rollback(null, true)
    return await knex.migrate.latest();
  });

  beforeEach(() => {
    return knex.seed.run();
  });

  afterAll(async () => {
    return await knex.migrate.rollback(null, true).then(() => knex.destroy());
  });

  describe("/GET /students", () => {
    
    test("Returns a list of cards", async () => {
      const response = await request(app)
        .get("/cards")
        .set("Accept", "application/json");

      expect(response.body.error).toBeUndefined();
      expect(response.body.data[0].card_id).toBe(1);
    });

  });

});
