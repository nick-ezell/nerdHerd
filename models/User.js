const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complexityCheck = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecial = /\W/.test(password);
  if (password.length < 8 || !hasUpperCase || !hasNumbers || !hasSpecial) {
    return false;
  } else {
    return true;
  }
};

const usersSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address."],
  },
  password: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: (password) => complexityCheck(password),
      message:
        "Password requires a Length of 8, an uppercase, number and special character.",
    },
  },
  username: { type: String, trim: true, required: true },
  dateJoined: { type: Date, default: Date.now, required: true },
  // posts: [{ type: String, required: false }],
  communities: [{ type: String, required: false }],
  friends: [
    {
      friendID: {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
      max: 25,
    },
  ],
  favGames: [
    {
      type: Schema.Types.ObjectId,
      ref: "Games",
    },
  ],
  recentSearches: [{ type: String, trim: true, required: false }],
  // Maybe add an image value for a user's user avatar picture?
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
