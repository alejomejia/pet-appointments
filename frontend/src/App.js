import { useState, useEffect } from 'react'

import APPOINTMENTS from './services/appointments'

import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Form from './components/Form'
import { Title } from './components/Common'
import Appointments from './components/Appointments'

function App() {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    APPOINTMENTS.getAll().then((appointments) => setAppointments(appointments))
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
                appointments={appointments}
                setAppointments={setAppointments}
              />
            ))}
        </Appointments>
      </Main>
    </Layout>
  )
}

export default App
