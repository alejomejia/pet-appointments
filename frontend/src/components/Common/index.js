import styled, { css } from 'styled-components/macro'

const FieldsCSS = css`
  width: 100%;
  padding: 8px 12px;
  border: 0;
  border-radius: 6px;
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  color: #5c635b;
  background-color: #e5eae4;

  &:focus {
    outline: 0;
    box-shadow: inset 0 0 0 2px #44794d;
  }
`

export const Title = styled.h1`
  margin-bottom: ${({ mb }) => mb};
`

export const Text = styled.p`
  margin-bottom: ${({ marginBottom }) => marginBottom};
`

export const Divider = styled.hr`
  margin: ${({ margin }) => margin};
  margin-bottom: 16px;
  border: none;
  border-top: 1px solid #ddd;
`

export const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 4px;
`

export const Input = styled.input`
  ${FieldsCSS};
  margin-bottom: 16px;
`

export const Textarea = styled.textarea`
  ${FieldsCSS};
  resize: none;
  height: 100px;
`

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  border: 0;
  padding: 16px;
  font-family: 'Nunito', sans-serif;
  font-weight: 700;
  border-radius: 8px;
  transition: transform 0.35s ease, box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  gap: ${({ gap }) => gap};
`
