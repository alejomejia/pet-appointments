import PropTypes from 'prop-types'

import { Title, Button } from '../Common'
import { Aside, Top, Body, Bottom, ScrollGradient } from './styled'

const Sidebar = ({ children }) => {
  return (
    <Aside>
      <Top>
        <Title mb="24px">Pet Appointments</Title>
      </Top>
      <Body>{children}</Body>
      <Bottom>
        <ScrollGradient />
        <Button>Add New Appointment</Button>
      </Bottom>
    </Aside>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sidebar
