import React from 'react'

import LoginButton from 'components/LoginButton'

import * as S from './LoginInput.styles'

export type LoginInputProps = {
  inputName?: 'Senha' | 'Email'
  hasButton?: boolean
}

const LoginInput = ({
  inputName = 'Senha',
  hasButton = true,
}: LoginInputProps) => {
  const inputType = inputName === 'Senha' ? 'password' : 'email'
  const placeholder =
    inputName === 'Senha' ? '••••••••••••' : 'books@ioasys.com.br'

  return (
    <S.Wrapper>
      <S.LabelWrapper>
        <S.Label htmlFor={inputName}>{inputName}</S.Label>
        <S.Input id={inputName} placeholder={placeholder} type={inputType} />
      </S.LabelWrapper>
      {hasButton && <LoginButton />}
    </S.Wrapper>
  )
}

export default LoginInput
