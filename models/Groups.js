const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupsSchema = new Schema({
  title: { type: String, required: true },
  leader: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  party: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  game: {
    type: Schema.Types.ObjectId,
    ref: "Games",
  },
  activity: { type: String, required: false },
  active: { type: Boolean, required: true, default: true },
});

const Groups = mongoose.model("Groups", groupsSchema);

module.exports = Groups;
