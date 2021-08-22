import styled from 'styled-components/macro'
import { Button } from '../../Common'

export const Article = styled.article`
  padding: 16px 24px;
  color: #313131;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.05);

  ${Button} {
    width: initial;
    padding: 4px;
    margin-left: auto;
    font-size: 16px;
    color: #ef5757;
    background-color: transparent;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`
