const listCards = (knex) => 
  knex("cards").select('*');

const getCardById = (knex, card_id) =>
  knex("cards").select("*").where({ card_id }).first();

module.exports = {
  listCards,
  getCardById,
}
