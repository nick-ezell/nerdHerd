//Dependencies
const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//Express init
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nerdHerd";

//Database init/connection for local and deployment
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Getting the contents of our routes folder
app.use(require("./routes"));

//Listening for deployment env variable to send built app
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
}

if (process.env.NODE_ENV === "production") {
  app.get("*", function (request, response) {
    response.sendFile(__dirname + "/client/build/index.html");
  });
}

app.listen(PORT, () => {
  console.log(`App running at https://localhost:${PORT}!`);
});
