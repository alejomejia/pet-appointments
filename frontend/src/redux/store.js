import { configureStore } from '@reduxjs/toolkit'

import appointmentsReducer from './appointments'

export default configureStore({
  reducer: {
    appointments: appointmentsReducer,
  },
})
