import PropTypes from 'prop-types'

import { Section } from './styled'

const Layout = ({ children }) => {
  return <Section>{children}</Section>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
