const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const devSchema = new Schema({
  devEmail: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, requied: false },
});

const Devs = mongoose.models("Devs", devSchema);

module.exports = Devs;
