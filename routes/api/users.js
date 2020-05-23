//Dependencies
const router = require("express").Router();

// Imports in controller for collectionName
import {
  findByUser,
  findById,
  findByEmail,
  create,
  update,
} from "../../controllers/usersController";

// Matches with "/api/collectionName" this is defined in "../index.js"
router.route("/:user").get(findByUser);

router.route("/:email").get(findByEmail).post(create);

// Matches with "/api/collectionName/:id" this is defined in "../index.js"
router.route("/:id").get(findById).put(update);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains collectionName routes
module.exports = router;
