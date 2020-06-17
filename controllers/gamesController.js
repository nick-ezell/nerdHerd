//Bring in models folder contents
const db = require("../models");
const axios = require("axios");

// Defining methods for the usersController
module.exports = {
  findByTitle: function (req, res) {
    db.Games.findOne({ title: req.params.title })
      .then((game) => res.json(game))
      .catch((err) => res.status(422).json(err));
  },
  findByGenre: function (req, res) {
    db.Games.find({ genre: req.params.genre })
      .then((games) => res.json(games))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Games.find({ _id: req.params.id })
      .then((games) => res.json(games))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const body = req.body;

    db.Games.create({
      company: body.company,
      image: body.image,
      title: body.title,
      genre: body.genre,
    })
      .then((game) => res.json(game))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Games.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },

  api: function (req, res) {
    axios
      // 3060-5
      .get(
        `https://cors-anywhere.herokuapp.com/http://www.giantbomb.com/api/games/?api_key=fc4a6358afb139997f08f81ee8151bf95273318f&format=json&platforms=179&&limit=1`
      )
      .then((data) => res.json(data))
      .catch((err) => res.status(422).json(err));
  },
};
