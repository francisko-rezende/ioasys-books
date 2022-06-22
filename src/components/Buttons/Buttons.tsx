import React from 'react'

import * as S from './Buttons.styles'

interface ButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'secondary' | 'success' | 'warning' | 'alert' | 'primary'
  size: 'tiny' | 'small' | 'basic' | 'large'
  disabled: boolean
}

// export type ButtonsProps = {
//   buttonType: 'secondary' | 'success' | 'warning' | 'alert' | 'primary'
//   size: 'tiny' | 'small' | 'basic' | 'large'
//   children: string
//   disabled: boolean
// } & HTMLButtonElement // olhar intersect para extender

const Buttons = ({
  buttonType = 'secondary',
  size,
  children,
  disabled,
  ...rest // passar sempre que o componente puder receber mais props
}: ButtonsProps) => {
  return (
    <S.Button size={size} buttonType={buttonType} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  )
}

export default Buttons
