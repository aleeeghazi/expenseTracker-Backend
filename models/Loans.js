const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loanSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
  },
  type:{
    type: Number,
    required: true,
    enum: [
        'expense',
        'income'
    ]
  }
})

const Loan = mongoose.model('Loan', loanSchema)

module.exports = Loan