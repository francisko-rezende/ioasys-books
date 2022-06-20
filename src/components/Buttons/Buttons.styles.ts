import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonsProps } from './Buttons'

const buttonVariants = {
  colors: {
    secondary: (theme: DefaultTheme) => css`
      border: 1px solid ${theme.colors.secondary};
      color: ${theme.colors.secondary};

      &:hover {
        border: 1px solid ${theme.colors.secondaryDark};
        color: ${theme.colors.secondaryDark};
      }

      &:disabled {
        color: ${theme.colors.white};
        background: ${theme.colors.secondary};
      }
    `,
    success: (theme: DefaultTheme) => css`
      border: 1px solid ${theme.colors.success};
      color: ${theme.colors.success};

      &:hover {
        border: 1px solid ${theme.colors.secondaryDark};
        color: ${theme.colors.secondaryDark};
      }

      &:disabled {
        background: ${theme.colors.success};
        color: ${theme.colors.black};
        opacity: 0.4;
      }
    `,
    warning: (theme: DefaultTheme) => css`
      border: 1px solid ${theme.colors.warning};
      color: ${theme.colors.warning};

      &:hover {
        border: 1px solid ${theme.colors.warningDark};
        color: ${theme.colors.warningDark};
      }

      &:disabled {
        background: ${theme.colors.warning};
        color: ${theme.colors.black};
        opacity: 0.4;
      }
    `,
    alert: (theme: DefaultTheme) => css`
      border: 1px solid ${theme.colors.alert};
      color: ${theme.colors.alert};

      &:hover {
        border: 1px solid ${theme.colors.alertDark};
        color: ${theme.colors.alertDark};
      }

      &:disabled {
        background: ${theme.colors.alert};
        color: ${theme.colors.white};
        opacity: 0.4;
      }
    `,
    primary: (theme: DefaultTheme) => css`
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};

      &:hover {
        border: 1px solid ${theme.colors.primaryDark};
        color: ${theme.colors.primaryDark};
      }

      &:disabled {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        opacity: 0.4;
      }
    `,
  },
  sizes: {
    tiny: () => css`
      padding: 8px 10px;
    `,
    small: () => css`
      padding: 10px 12px;
    `,
    basic: () => css`
      padding: 12px 14px;
      font-size: 14px;
    `,
    large: () => css`
      padding: 17px 20px;
      font-size: 14px;
    `,
  },
}

export const Button = styled.button<ButtonsProps>`
  font-size: 9px;
  background: transparent;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ size, buttonType, theme }) => css`
    ${!!size && buttonVariants.sizes[size]()}
    ${!!buttonType && buttonVariants.colors[buttonType](theme)}
  `}
`
