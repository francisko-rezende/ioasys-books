import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: hsla(0, 0%, 0%, 0.32);
  padding: 8px 16px;
  border-radius: 4px;
  min-height: 60px;
  display: flex;
  align-items: center;
`

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const Label = styled.label`
  color: hsla(0, 0%, 100%, 0.5);
  background-color: red;
`

export const Input = styled.input`
  background: none;
  background-color: blue;
  border: none;
  color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
  }
`
