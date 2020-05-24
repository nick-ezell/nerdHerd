//Dependencies
const router = require("express").Router();

// Imports in controller for collectionName
const usersController = require("../../controllers/usersController");

// Matches with "/api/collectionName" this is defined in "../index.js"
router.route("/search/:username").get(usersController.findByUser);

router.route("/:id").get(usersController.findById);

router.route("/search/:email").get(usersController.findByEmail);

router.route("/create").post(usersController.create);

router.route("/:id").put(usersController.update);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains collectionName routes
module.exports = router;
