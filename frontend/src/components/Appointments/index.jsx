import PropTypes from 'prop-types'

import Item from './Item'
import { Section } from './styled'

const Appointments = ({ children }) => {
  return <Section>{children}</Section>
}

Appointments.propTypes = {
  children: PropTypes.node.isRequired,
}

Appointments.Item = Item

export default Appointments
