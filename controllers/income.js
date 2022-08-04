const Income = require('../models/Income')

// Define methods for income
module.exports = {
  add: function (req, res) {
    console.log(req.bodys)
   Income.create(req.body)
      .then(income => res.json(income))
      .catch(err => res.status(422).json(err))
  },
  getAll: function (req, res) {
   Income.find({ user: req.params.user })
      .sort({ date: -1 })
      .populate('category')
      .then(incomes => res.json(incomes))
      .catch(err => res.status(422).json(err))
  },
  delete: function (req, res) {
   Income.deleteOne({ _id: req.params.id })
      .then(income => res.json(income))
      .catch(err => res.status(422).json(err))
  }
}