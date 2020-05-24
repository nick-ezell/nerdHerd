const router = require("express").Router();

// Import our database model routes
const groupsRoutes = require("./groups");
// const gamesRoutes = require("./games");
const userRoutes = require("./users");
// const communityRoutes = require("./community");
// const scrapeRoutes = require("./scrape");

// Set paths to use individual routes for our models
//   // www.url.com/api/collectionName will use routes from collectionNameRoutes
router.use("/groups", groupsRoutes);
// router.use("/games", gamesRoutes);
router.use("/user", userRoutes);
// router.use("/community", communityRoutes);
// router.use("/scrape", scrapeRoutes);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains API routes
module.exports = router;
