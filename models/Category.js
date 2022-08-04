const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  threshold:{
    type: Number,
    required: true,
  },
  type:{
    type: String,
    required: true,
    trim: true,
    enum: [
      'expense',
      'income'
    ]
  }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category