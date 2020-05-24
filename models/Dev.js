const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devSchema = new Schema({
  devEmail: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, requied: false },
});

const Dev = mongoose.model("Devs", devSchema);

module.exports = Dev;
