//Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//Express init
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Database init/connection for local and deployment
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nerdHerd", {
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
  console.log(`'${process.env.NODE_ENV}'`);
});
