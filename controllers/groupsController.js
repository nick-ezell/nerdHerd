//Bring in models folder contents
const db = require("../models/Groups");

// Defining methods for the groupsController
module.exports = {
  findByGame: function (req, res) {
    db.Groups.findAll({ game: req.query })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Groups.find({ _id: req.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    const body = req.body;
    db.Groups.create({
      title: body.title,
      leader: body.leader,
      party: body.party,
      game: body.game,
      activity: body.activity,
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Groups.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  removeGroup: function (req, res) {
    db.Groups.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
