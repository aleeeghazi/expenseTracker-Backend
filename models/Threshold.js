const mongoose = require('mongoose')
const Schema = mongoose.Schema

const thresholdSchema = new Schema({
  transportation: {
    type: Number,
    required: true
  },
  housing: {
    type: Number,
    required: true
  },
  food: {
    type: Number,
    required: true,
    trim: true,

  },
 miscellanous: {
    type: Number,
    required: true,
    trim: true
  },
})

const Threshold = mongoose.model('Threshold', thresholdSchema)

module.exports = Threshold