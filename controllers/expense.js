const Expense = require('../models/Expense');
const Category = require('../models/Category')
// Define methods for expenses
module.exports = {
    add: async function (req, res) {
        let value
        await Category
        .findOne({id: req.body.category})
        .then(response=>{
            console.log(response)
            value=response.threshold
        })
        console.log(req.body.amount,value)
        if(req.body.amount>value){
            req.body.thresholdExceeded=true
        }
       Expense
            .create(req.body)
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    getAll: function (req, res) {
        console.log(req.params.user)
       Expense
            .find({ user: req.params.user })
            .populate('category')
            .sort({ date: -1 })
            .then(responses => res.json(responses))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
       Expense
            .findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
       Expense
            .deleteOne({ _id: req.params.id })
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    }
}

