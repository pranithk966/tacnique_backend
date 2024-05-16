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
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    connectTimeoutMS: 30000, // 30 seconds connection timeout
    bufferCommands: false, // Disable Mongoose buffering
  })

  .then(() => {
    console.log('database connected')
  })
  .catch((err) => console.log(err))
