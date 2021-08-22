import PropTypes from 'prop-types'

import { Flex, Text, Divider, Button } from '../../Common'
import Icon from '../../Icon'

import { Article } from './styled'

const Item = ({ customer, pet, date, time, symptoms, handleDelete }) => {
  return (
    <Article>
      <Flex align="center" gap="4px">
        <Icon name="calendar" /> {date}
        <span> - </span>
        <Icon name="time" /> {time}
        <Button onClick={handleDelete}>
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

Item.defaultProps = {
  customer: 'Alejandro Mejia',
  pet: 'Misha & Chloe',
  date: '2020/12/03',
  time: '8:00 AM',
  symptoms: 'I dont know whats happening with them',
}

Item.propTypes = {
  customer: PropTypes.string.isRequired,
  pet: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  symptoms: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default Item
