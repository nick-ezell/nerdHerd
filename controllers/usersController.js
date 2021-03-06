//Bring in models folder contents
const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findByUser: function (req, res) {
    db.User.find({ username: req.query })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.find({ _id: req.params.id })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  findByEmail: function (req, res) {
    db.User.findOne(req.params.email)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  Login: function (req, res) {
    db.User.findOne({ email: req.params.email, password: req.params.password })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const body = req.body;

    db.User.create({
      email: body.email,
      password: body.password,
      username: body.username,
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  // addFavGame: function (req, res) {
  //   const body = req.body;
  //   db.Games.findOne(
  //     { _id: req.params.id }
  //   )
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
