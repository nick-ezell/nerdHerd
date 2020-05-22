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
  game: [{ type: String, required: false }],
  description: [{ type: String, required: false }],
  // posts: [{ type: String, required: false }],
  activeGroups: [{ type: String, required: false }],
  // Maybe add an image value for a user's user avatar picture?
});

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;
