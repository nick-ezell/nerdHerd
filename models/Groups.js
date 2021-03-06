//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating Groups schema
const groupsSchema = new Schema({
  title: { type: String },
  leader: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  party: [
    {
      player: { type: Schema.Types.ObjectId, ref: "User" },
    },
  ],
  game: {
    type: Schema.Types.ObjectId,
    ref: "Games",
  },
  activity: { type: String },
});

//Creating value for Groups models
const Groups = mongoose.model("Groups", groupsSchema);

module.exports = Groups;
