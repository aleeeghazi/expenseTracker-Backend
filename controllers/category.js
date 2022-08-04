const Category = require('../models/Category');
module.exports = {
    add: async function (req, res) {
        console.log(req.body)
       Category
            .create(req.body)
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    getAll: function (req, res) {
        console.log(req.params)
       Category
            .find(req.params )
            .sort({ date: -1 })
            .then(responses => res.json(responses))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
       Category
            .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
       Category
            .deleteOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    }
}