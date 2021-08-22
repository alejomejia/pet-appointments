import { createGlobalStyle } from 'styled-components'

import reset from './reset'

const GlobalCSS = createGlobalStyle`
  ${reset}

  html,
  body{
    overflow-x: hidden;
  }

  body{
    position: relative;
    font-size: 16px;
    background-color: #eef3ed;
  }

  h1,
  h2,
  h3 {
    color: #18301c;
  }
  
  p {
    color: #596a5c;
  }

  button {
    color: #033234;
    background-color: #c0e7ba;
  }
`

export default GlobalCSS
