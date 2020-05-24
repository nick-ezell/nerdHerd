//Dependencies
const router = require("express").Router();

// Imports in controller for collectionName
const groupsController = require("../../controllers/groupsController");

// Matches with "/api/collectionName" this is defined in "../index.js"
router.route("/:game").get(() => {
  groupsController.findByGame;
});

router.route("/:game/create").post(() => {
  groupsController.create;
});

router
  .route("/:id")
  .get(() => {
    groupsController.findByGame;
  })
  .put(() => {
    groupsController.update;
  });

router.route("/remove/:id").get(() => {
  groupsController.removeGroup;
});

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains collectionName routes
module.exports = router;
