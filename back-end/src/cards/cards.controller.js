const service = require("./cards.service");

const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

const list = async (request, response, next) => {
  response.json({ data: await service.listCards(request.app.get("db")) });
}

const read = (request, response, next) => {
  return response.json({ data: response.locals.card });
}

/*
 * Helper Functions
 */

const cardExists = async (request, response, next) => {
  const knex = request.app.get("db");
  const cardId = request.params.cardId;

  const card = await service.getCardById(knex, cardId);

  if(!card) next({ status: 404, message: `No card with the id ${cardId} found.` });

  response.locals.card = card;
  next();
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [
    asyncErrorBoundary(cardExists),
    asyncErrorBoundary(read)
  ],
}
