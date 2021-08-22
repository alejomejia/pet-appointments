import Layout from './components/Layout'
import Sidebar from './components/Sidebar'
import Form from './components/Form'

function App() {
  return (
    <Layout>
      <Sidebar>
        <Form />
      </Sidebar>
      <h1>
        <span>Pet Appointments</span>
      </h1>
    </Layout>
  )
}

export default App
