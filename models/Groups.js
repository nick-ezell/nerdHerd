const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupsSchema = new Schema({
  leader: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  party: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
  ],
  game: { type: String, required: true },
  title: { type: String, required: true },
  activity: { type: String, required: false },
});

const Groups = mongoose.model("Groups", groupsSchema);

module.exports = Groups;
