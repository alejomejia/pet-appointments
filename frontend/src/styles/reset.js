import { css } from 'styled-components'

const reset = css`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
`

export default reset
