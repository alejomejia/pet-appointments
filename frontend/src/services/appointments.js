import axios from 'axios'
const BASE_URL = 'http://localhost:3001/api/appointments'

const getAll = () => {
  const request = axios.get(BASE_URL)
  return request.then((response) => response.data)
}

const create = (appointment) => {
  const request = axios.post(BASE_URL, appointment)
  return request.then((response) => response.data)
}

const remove = (id) => {
  const request = axios.delete(`${BASE_URL}/${id}`)
  return request.then((response) => response.data)
}

const APPOINTMENTS = { getAll, create, remove }

export default APPOINTMENTS
