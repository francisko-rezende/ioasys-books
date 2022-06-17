import styled, { css } from 'styled-components'

import { LogoProps } from './Logo'

export const Wrapper = styled.div<LogoProps>`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 2.8rem;

  ${({ theme, color }) => css`
    font-weight: ${theme.fontWeights.thin};
    color: ${theme.colors[color!]};
  `}
`

export const IoasysWrapper = styled.div`
  width: 104px;
  height: 36px;
`
