import { createSlice } from '@reduxjs/toolkit'

import APPOINTMENTS from '../services/appointments'

export const slice = createSlice({
  name: 'appointments',
  initialState: {
    appointments: [],
    isLoading: false,
    isSuccess: false,
    isFail: false,
  },
  reducers: {
    getAppointmentsRequest: (state) => {
      return {
        ...state,
        appointments: [],
        isLoading: true,
        isSuccess: false,
        isFail: false,
      }
    },
    getAppointmentsSuccess: (state, action) => {
      return {
        ...state,
        appointments: action.payload,
        isLoading: false,
        isSuccess: true,
        isFail: false,
      }
    },
    getAppointmentsFail: (state) => {
      return {
        ...state,
        appointments: [],
        isLoading: false,
        isSuccess: false,
        isFail: true,
      }
    },
    deleteAppointmentSuccess: (state, action) => {
      const appointments = state.appointments
      const appointmentsAfterDelete = appointments.filter(
        (appointment) => appointment.id !== action.payload
      )

      return {
        ...state,
        appointments: appointmentsAfterDelete,
        isLoading: false,
        isSuccess: true,
        isFail: false,
      }
    },
  },
})

export const getAppointments = () => (dispatch) => {
  dispatch(getAppointmentsRequest())

  APPOINTMENTS.getAll()
    .then((appointments) => dispatch(getAppointmentsSuccess(appointments)))
    .catch((e) => dispatch(getAppointmentsFail()))
}

export const deleteAppointment = (id) => (dispatch) => {
  APPOINTMENTS.remove(id)
    .then(() => dispatch(deleteAppointmentSuccess(id)))
    .catch((e) => dispatch(getAppointmentsFail()))
}

export default slice.reducer
export const {
  getAppointmentsRequest,
  getAppointmentsSuccess,
  getAppointmentsFail,
  deleteAppointmentSuccess,
} = slice.actions
