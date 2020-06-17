//Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// const cors = require("cors");

const PORT = process.env.PORT || 3000;
//Express init
const app = express();

// Then use it before your routes are set up:
// app.use(cors());

// // Set up a whitelist and check against it:
// var whitelist = ["https://giantbomb.com"];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

// // Then pass them to cors:
// app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://user1:password1@ds139956.mlab.com:39956/heroku_fgtf6kx5";

//Database init/connection for local and deployment
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Getting the contents of our routes folder
app.use(require("./routes/index"));

//Listening for deployment env variable to send built app
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ****Take these out of if statements in development****
// ****If using db needs both server and react up****

// React app init
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
  );
}

app.listen(PORT, () => {
  console.log(`App running at https://localhost:${PORT}!`);
});
