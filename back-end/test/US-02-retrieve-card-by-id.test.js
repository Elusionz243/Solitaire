const request = require("supertest");

const app = require("../src/app");
const knex = require("../src/db/connection");

describe("US-02 Retrieve a card with matching card_id", () => {
  
  beforeAll(async () => {
    await knex.migrate.forceFreeMigrationsLock();
    await knex.migrate.rollback(null, true);
    return await knex.migrate.latest();
  });

  beforeEach(() => {
    return knex.seed.run();
  });

  afterAll(async () => {
    return await knex.migrate.rollback(null, true).then(() => knex.destroy());
  });

  describe("/GET /cards/:cardId", () => {
    
    test("Returns 404 if card doesn't exists", async () => {
      const response = await request(app)
        .get("/cards/99")
        .set("Accept", "application/json");

      expect(response.body.error).not.toBeUndefined();
      expect(response.body.error).toContain("99");
      expect(response.status).toBe(404);
    });

    test("Returns card with matching card id", async () => {
      const response = await request(app)
        .get("/cards/1")
        .set("Accept", "application/json");

      expect(response.body.data.card_id).toBe(1);
      expect(response.body.error).toBeUndefined();
    });

  });

});
