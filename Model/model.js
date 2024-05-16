const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usersSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('usersSchema', usersSchema)
