const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  dateJoined: { type: Date, default: Date.now },
  communities: [{ type: String, required: false }],
  squad: [{ type: String, required: false }],
  favGames: [{ type: String, required: false }],
  recentSearches: [{ type: String, required: false }],
  // Maybe add an image value for a user's user avatar picture?
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
