//Dependencies
const router = require("express").Router();

// Imports in controller for collectionName
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/collectionName" this is defined in "../index.js"
router.route("/:title").get(gamesController.findByTitle);

router.route("/:genre").get(gamesController.findByGenre);

router.route("/create").post(gamesController.create);

router.route("/:id").get(gamesController.findById).put(gamesController.update);

// Export instance of express router which contains collectionName routes
module.exports = router;
