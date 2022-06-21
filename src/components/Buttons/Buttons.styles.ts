import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonsProps } from './Buttons'

const buttonVariants = {
  colors: {
    secondary: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.secondary};
      color: ${theme.colors.secondary};

      &:hover {
        border-color: ${theme.colors.secondaryDark};
        color: ${theme.colors.secondaryDark};
      }

      &:disabled {
        color: ${theme.colors.white};
        background: ${theme.colors.secondary};
      }
    `,
    success: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.success};
      color: ${theme.colors.success};

      &:hover {
        border-color: ${theme.colors.successDark};
        color: ${theme.colors.successDark};
      }

      &:disabled {
        background: ${theme.colors.success};
        color: ${theme.colors.black};
      }
    `,
    warning: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.warning};
      color: ${theme.colors.warning};

      &:hover {
        border-color: ${theme.colors.warningDark};
        color: ${theme.colors.warningDark};
      }

      &:disabled {
        background: ${theme.colors.warning};
        color: ${theme.colors.black};
      }
    `,
    alert: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.alert};
      color: ${theme.colors.alert};

      &:hover {
        border-color: ${theme.colors.alertDark};
        color: ${theme.colors.alertDark};
      }

      &:disabled {
        background: ${theme.colors.alert};
        color: ${theme.colors.white};
      }
    `,
    primary: (theme: DefaultTheme) => css`
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};

      &:hover {
        border-color: ${theme.colors.primaryDark};
        color: ${theme.colors.primaryDark};
      }

      &:disabled {
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    `,
  },
  sizes: {
    tiny: css`
      padding: 8px 10px;
    `,
    small: css`
      padding: 10px 12px;
    `,
    basic: css`
      padding: 12px 14px;
      font-size: 14px;
    `,
    large: css`
      padding: 17px 20px;
      font-size: 14px;
    `,
  },
}

export const Button = styled.button<ButtonsProps>`
  font-size: 9px;
  background: transparent;
  text-transform: uppercase;
  border-width: 1px;
  border-style: solid;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${({ size, buttonType, theme }) => css`
    ${!!size && buttonVariants.sizes[size]}
    ${!!buttonType && buttonVariants.colors[buttonType](theme)}
  `}
`
