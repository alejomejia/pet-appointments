import styled from 'styled-components/macro'

export const Aside = styled.aside`
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #fff;
  border-radius: 0 24px 24px 0;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
`

export const Top = styled.div``

export const Body = styled.div`
  flex: 1;
  overflow: auto;
  margin-right: -18px;
  padding-right: 18px;
`

export const Bottom = styled.div`
  position: relative;
  margin-top: 16px;
`

export const ScrollGradient = styled.div`
  position: absolute;
  width: 100%;
  top: calc(-16px + -24px);
  height: 24px;
  background: linear-gradient(0deg, #fff, transparent);
`
