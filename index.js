const express = require('express')
const cors = require('cors')
require('dotenv').config()
const Router = require('./Routes/routes')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ mssge: 'home' })
})

app.use('/api', Router)

const PORT = process.env.PORT || 8080

app.listen(PORT, (req, res) => {
  console.log('loisten', 8080)
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('database connected')
  })
  .catch((err) => console.log(err))
