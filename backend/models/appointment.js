const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  petName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
  },
})

appointmentSchema.set('toJSON', {
  transform: (document, returnedAppointment) => {
    returnedAppointment.id = returnedAppointment._id.toString()
    delete returnedAppointment._id
    delete returnedAppointment.__v
  },
})

module.exports = mongoose.model('Appointment', appointmentSchema)
