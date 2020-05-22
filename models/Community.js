const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  name: { type: String, required: true },
  createdBy: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now, required: true },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  game: {
    type: Schema.Types.ObjectId,
    ref: "Games",
    required: true,
  },
  description: [{ type: String, required: false }],
  // posts: [{ type: String, required: false }],
  activeGroups: [{ type: String, required: false }],
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
