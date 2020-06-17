const router = require("express").Router();

// Import routes from ./api/index
const apiRoutes = require("./api/index");

// Listening for the /api prefix in routes and using api routes from ./api/index
router.use("/api", apiRoutes);

// If no routes are hit, start React app by default
// router.use(function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

//Dont do this ^

// Export instance of express router which contains API and VIEW routes
module.exports = router;
