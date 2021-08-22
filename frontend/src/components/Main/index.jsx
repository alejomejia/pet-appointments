import PropTypes from 'prop-types'

import { SMain } from './styled'

const Main = ({ children }) => {
  return <SMain>{children}</SMain>
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
