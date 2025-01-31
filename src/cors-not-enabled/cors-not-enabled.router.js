const router = require("express").Router();
const controller = require("./cors-not-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");
router
  .route("/:noCorsId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(cors(),controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

module.exports = router;
