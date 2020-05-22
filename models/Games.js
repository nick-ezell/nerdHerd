const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gamesSchema = new Schema({
  company: { type: String, required: true },
  image: { type: String, required: false },
  title: { type: String, required: true },
  genre: { type: String, required: false },
  communities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

const Games = mongoose.model("Games", gamesSchema);

module.exports = Games;
