const standardDeck = require("./00_cards.json");

exports.seed = async function(knex) {
  await knex('cards').del()
  await knex.raw("TRUNCATE TABLE cards RESTART IDENTITY CASCADE");
  return await knex('cards').insert(standardDeck);
};
