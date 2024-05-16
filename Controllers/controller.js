const express = require('express')
const mongoose = require('mongoose')
const users = require('../Model/model')

const getUsers = async (req, res) => {
  // res.json({ mssge: 'users' })
  const user = await users.find({}).sort({ createdAt: -1 })

  res.status(200).json(user)
}

const getUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such user' })
  }
  const user = await users.findById(id)

  if (!user) {
    return res.status(404).json({ error: 'no such user' })
  }
  res.status(200).json(user)
}

const addUser = async (req, res) => {
  const { firstName, lastName, email, department } = req.body

  try {
    const user = await users.create({ firstName, lastName, email, department })
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such user' })
  }

  const user = await users.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!user) {
    return res.status(404).json({ error: 'no such user' })
  }
  res.status(200).json(user)
}

const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no such user' })
  }

  const user = await users.findByIdAndDelete(id)

  if (!user) {
    return res.status(404).json({ error: 'no such user' })
  }

  res.status(200).json(user)
}

module.exports = { getUsers, getUser, addUser, updateUser, deleteUser }
