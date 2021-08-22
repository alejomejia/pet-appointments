const appointmentsRouter = require('express').Router()
const Appointment = require('../models/appointment')

appointmentsRouter.get('/', async (req, res) => {
  const appointments = await Appointment.find({})
  res.json(appointments)
})

appointmentsRouter.get('/:id', async (req, res) => {
  const id = req.params.id
  const appointment = await Appointment.findById(id)

  console.log('APPOINTMENT', appointment)

  if (appointment) {
    res.json(appointment)
  } else {
    res.status(404).end()
  }
})

appointmentsRouter.post('/', async (req, res) => {
  const body = req.body

  const appointment = new Appointment({
    customerName: body.customerName,
    petName: body.petName,
    date: body.date,
    time: body.time,
    symptoms: body.symptoms,
  })

  const savedAppointment = await appointment.save()
  res.json(savedAppointment)
})

appointmentsRouter.delete('/:id', async (req, res) => {
  const id = req.params.id
  await Appointment.findByIdAndRemove(id)
  res.status(204).end()
})

appointmentsRouter.put('/:id', async (req, res) => {
  const id = req.params.id
  const body = req.body

  const appointment = {
    customerName: body.customerName,
    petName: body.petName,
    date: body.date,
    time: body.time,
    symptoms: body.symptoms,
  }

  const updatedAppointment = await Appointment.findByIdAndUpdate(
    id,
    appointment,
    {
      new: true,
      runValidators: true,
      context: 'query',
    }
  )

  res.json(updatedAppointment)
})

module.exports = appointmentsRouter
