const router = require("express").Router();
const controller = require("./cors-enabled.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
// const cors = require("cors");
// const corsUpdate = cors({methods: "PUT"});
// const corsDelete = cors({methods: "DELETE"});
// const corsAdd = cors({methods: "POST"});
// router.use(cors()); // this enables in router level.

router
  .route("/:corsId")
  // .all(cors())
  .get(controller.read)
  // .get(cors(),controller.read)
  // .put(cors(), controller.update)
  .put(controller.update)
  // .options(corsUpdate)
  // .delete( controller.delete)
  .delete(controller.delete)
  // .options(corsUpdate)
  // .options(corsDelete)
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.list)
  // .get(cors(), controller.list)
  // .post(controller.create)
  // .post(corsAdd, controller.create)
  .post(controller.create)
  // .options(corsAdd)
  .all(methodNotAllowed);

module.exports = router;
