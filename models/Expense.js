const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = new Schema({
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
  thresholdExceeded:{
    type: Boolean,
    required: true,
    default: false
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
  }
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense