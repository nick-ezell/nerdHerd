//Dependencies
const router = require("express").Router();

// Imports in controller for collectionName
import {
  findByGame,
  findById,
  create,
  update,
  removeGroup,
} from "../../controllers/usersController";

// Matches with "/api/collectionName" this is defined in "../index.js"
router.route("/:game").get(findByGame);

router.route("/search/:id").get(findById);

router.route("/:game/create").get.post(create);

router.route("/:id").get(findById).put(update);

router.route("/remove/:id").get(removeGroup);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains collectionName routes
module.exports = router;
