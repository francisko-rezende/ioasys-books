import styled, { css } from 'styled-components'

export const Button = styled.button`
  font-size: 1.6rem;
  border: none;
  padding: 0.8rem 2.1rem;
  border-radius: 44px;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.magenta};
    font-weight: ${theme.fontWeights.thick};
  `}
`
