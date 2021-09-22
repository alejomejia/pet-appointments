import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { deleteAppointment } from '../../../redux/appointments'

import { Flex, Text, Divider, Button } from '../../Common'
import Icon from '../../Icon'

import { Article } from './styled'

const Item = ({ id, customer, pet, date, time, symptoms }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    const askForDelete = window.confirm(
      'Are you sure you want to delete this appointment?'
    )

    askForDelete && dispatch(deleteAppointment(id))
  }

  return (
    <Article>
      <Flex align="center" gap="4px">
        <Icon name="calendar" /> {date}
        <span> - </span>
        <Icon name="time" /> {time}
        <Button onClick={() => handleDelete(id)}>
          <Icon name="delete-bin" />
        </Button>
      </Flex>
      <Divider margin="8px 0" />
      <Text marginBottom="8px">
        <strong>Customer: </strong>
        {customer}
      </Text>
      <Text marginBottom="8px">
        <strong>Pet: </strong>
        {pet}
      </Text>
      <Text marginBottom="16px">
        <strong>Symptoms: </strong>
        {symptoms}
      </Text>
    </Article>
  )
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  pet: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  symptoms: PropTypes.string.isRequired,
}

export default Item
