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
    font-family: 'Nunito', sans-serif;
    background-color: #eef3ed;
  }

  body,
  #root {
    min-height: 100vh;
  }

  h1,
  h2,
  h3 {
    color: #44794d
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }
  
  p,
  label {
    color: #596a5c;
  }

  button {
    color: #033234;
    background-color: #c0e7ba;
  }
`

export default GlobalCSS
