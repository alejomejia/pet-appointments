const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const appointmentsRouter = require('./controllers/appointments')

logger.info('Connecting to', config.MONGODB_URI)

const connectDB = async () => {
  await mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  logger.info('Connected to MongoDB')
}

connectDB()

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/appointments', appointmentsRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
