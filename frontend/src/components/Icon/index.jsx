import 'remixicon/fonts/remixicon.css'
import PropTypes from 'prop-types'

const Icon = ({ name }) => {
  return <i className={`ri-${name}-fill`}></i>
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
