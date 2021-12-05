const service = require("./cards.service");

const asyncErrorHandler = require("../errors/asyncErrorBoundary");

const list = async (request, response, next) => {
  response.json({ data: await service.listCards(request.app.get("db")) });
}

module.exports = {
  list: asyncErrorHandler(list),
}
