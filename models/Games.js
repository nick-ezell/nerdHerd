//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating Games schema
const gamesSchema = new Schema({
  company: { type: String },
  image: { type: String },
  title: { type: String },
  genre: { type: String },
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
