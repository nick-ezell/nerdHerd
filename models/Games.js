//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating Games schema
const gamesSchema = new Schema({
  company: { type: String, required: true },
  image: { type: String, required: false },
  title: { type: String, required: true },
  genre: { type: String, required: false },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Groups",
    },
  ],
  communities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Community",
    },
  ],
});

//Creating value for Games model
const Games = mongoose.model("Games", gamesSchema);

module.exports = Games;
