import React from 'react'

import * as S from './Buttons.styles'

export type ButtonsProps = {
  buttonType: 'secondary' | 'success' | 'warning' | 'alert' | 'primary'
  size: 'tiny' | 'small' | 'basic' | 'large'
  children: string
  disabled: boolean
}

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
