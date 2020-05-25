const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devSchema = new Schema({
  devEmail: { type: String },
  password: { type: String },
  image: { type: String },
});

const Dev = mongoose.model("Dev", devSchema);

module.exports = Dev;
