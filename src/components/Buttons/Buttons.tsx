import React, { ReactNode } from 'react'

import * as S from './Buttons.styles'

interface ButtonsProps extends React.ComponentProps<'button'> {
  buttonType: 'secondary' | 'success' | 'warning' | 'alert' | 'primary'
  size: 'tiny' | 'small' | 'basic' | 'large'
  disabled: boolean
  children: ReactNode // ReactNode não funciona aqui OU talvez funcione?
}

// export type ButtonsProps = {
//   buttonType: 'secondary' | 'success' | 'warning' | 'alert' | 'primary'
//   size: 'tiny' | 'small' | 'basic' | 'large'
//   children: string
//   disabled: boolean
// } & HTMLButtonElement

const Buttons = ({
  buttonType = 'secondary',
  size,
  children = 'Button',
  disabled,
}: ButtonsProps) => {
  return (
    <S.Button size={size} buttonType={buttonType} disabled={disabled}>
      {children}
    </S.Button>
  )
}

export default Buttons
