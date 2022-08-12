const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loanSchema = new Schema({
  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  loanFrom: {
    type: String,
    required: false,
    trim: true
  },
  loanTo: {
    type: String,
    required: false,
    trim: true
  },
  returnDate:{
    type: Date,
    required: true
  },
  amount:{
    type: Number,
    required: true,
  },  
  description: {
    type: String,
    required: true,
    trim: true
  },
  loanType:{
    type: String,
    required: true,
    trim: true,
    enum: [
      'expense',
      'income'
    ]
  },
  status:{
    type: String,
    required: true,
    trim: true,
    enum: [
      'pending',
      'paid',
      'recieved'
    ]
  }
})

const Loan= mongoose.model('Loan', loanSchema)

module.exports = Loan