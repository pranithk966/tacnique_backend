const express = require('express')
const Router = express.Router()
const {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require('../Controllers/controller')

Router.get('/', getUsers)

Router.get('/:id', getUser)

Router.post('/', addUser)

Router.patch('/:id', updateUser)

Router.delete('/:id', deleteUser)

module.exports = Router
