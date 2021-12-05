const standardDeck = require("./00_cards.json");

exports.seed = function(knex) {
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert(standardDeck);
    });
};
