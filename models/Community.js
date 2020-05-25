const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const communitySchema = new Schema({
  name: { type: String },
  createdBy: { type: String },
  dateCreated: { type: Date, default: Date.now },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
  game: {
    type: Schema.Types.ObjectId,
    ref: "Games",
  },
  description: [{ type: String }],
  // posts: [{ type: String }],
  activeGroups: [{ type: String }],
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
