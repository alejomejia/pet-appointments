import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAppointments } from './redux/appointments'

import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Form from './components/Form'
import { Title } from './components/Common'
import Appointments from './components/Appointments'

function App() {
  const dispatch = useDispatch()
  const { appointments } = useSelector((state) => state.appointments)

  useEffect(() => {
    dispatch(getAppointments())
    // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <Sidebar>
        <Form />
      </Sidebar>
      <Main>
        <Title as="h2" mb="24px">
          {appointments.length ? 'Appointments' : 'No appointments yet'}
        </Title>
        <Appointments>
          {appointments &&
            appointments.map((item) => (
              <Appointments.Item
                key={item.id}
                id={item.id}
                customer={item.customerName}
                pet={item.petName}
                date={item.date}
                time={item.time}
                symptoms={item.symptoms}
              />
            ))}
        </Appointments>
      </Main>
    </Layout>
  )
}

export default App
