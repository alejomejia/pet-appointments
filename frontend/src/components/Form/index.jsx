import { Text, Divider, Label, Input, Textarea } from '../Common'

const Form = () => {
  return (
    <form>
      <Text mb="16px">
        Fill the form to make a <strong>new appointment</strong>
      </Text>
      <Divider margin="16px 0" />
      <Label htmlFor="customer">Customer name</Label>
      <Input id="customer" type="text" />
      <Label htmlFor="pet">Pet name</Label>
      <Input id="pet" type="text" />
      <Label htmlFor="date">Date</Label>
      <Input id="date" type="date" />
      <Label htmlFor="time">Time</Label>
      <Input id="time" type="time" />
      <Label htmlFor="symptoms">Symptoms</Label>
      <Textarea id="symptoms" />
    </form>
  )
}

export default Form
