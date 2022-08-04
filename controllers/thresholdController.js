const Threshold = require('../models/Threshold')

// Define methods for income
module.exports = {
  add: function (req, res) {
    console.log(req.body)
   Threshold.create(req.body)
      .then(income => res.json(income))
      .catch(err => res.status(422).json(err))
  },

}