const Loan = require('../models/Loan')

module.exports = {
  add: function (req, res) {
    console.log(req.body)
   Loan.create(req.body)
      .then(Loan => res.json(Loan))
      .catch(err => res.status(422).json(err))
  },
  getAll: function (req, res) {
   Loan.find({ user: req.params.user })
      .sort({ date: -1 })
      .then(Loans => res.json(Loans))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    console.log(req.body)
    Loan.findByIdAndUpdate(req.params.id, req.body, { new: true })
         .then(response => res.json(response))
         .catch(err => {console.log(err)});
 },
  delete: function (req, res) {
   Loan.deleteOne({ _id: req.params.id })
      .then(Loan => res.json(Loan))
      .catch(err => res.status(422).json(err))
  }
}