const router = require("express").Router();

const controller = require("./cards.controller");

const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
  .get(controller.list)
  .all(methodNotAllowed);

router.route("/:cardId")
  .get(controller.read)
  .all(methodNotAllowed);

module.exports = router;
