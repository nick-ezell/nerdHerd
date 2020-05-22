const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
  company: { type: String, required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  genre: { type: String, required: false },
});

const Games = mongoose.model("Games", gamesSchema);

module.exports = Games;
