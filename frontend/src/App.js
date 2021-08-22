import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Form from './components/Form'
import { Title } from './components/Common'
import Appointments from './components/Appointments'

function App() {
  const handleDelete = (e) => {
    alert('clicked')
  }

  return (
    <Layout>
      <Sidebar>
        <Form />
      </Sidebar>
      <Main>
        <Title as="h2" mb="24px">
          No appointments yet
        </Title>
        <Appointments>
          <Appointments.Item handleDelete={handleDelete} />
          <Appointments.Item handleDelete={handleDelete} />
          <Appointments.Item handleDelete={handleDelete} />
          <Appointments.Item handleDelete={handleDelete} />
          <Appointments.Item handleDelete={handleDelete} />
          <Appointments.Item handleDelete={handleDelete} />
          <Appointments.Item handleDelete={handleDelete} />
        </Appointments>
      </Main>
    </Layout>
  )
}

export default App
