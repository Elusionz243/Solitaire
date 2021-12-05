const listCards = (knex) => 
  knex("cards").select('*');

module.exports = {
  listCards,
}
