import React from 'react'

import LoginInput from 'components/LoginInput'

import * as S from './LoginForm.styles'

const LoginForm = () => {
  const [email, setEmail] = React.useState('desafio@ioasys.com.br')
  const [password, setPassword] = React.useState('12341234')

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault()

        const loginData = {
          email,
          password,
        }

        fetch(' https://books.ioasys.com.br/api/v1/auth/sign-in', {
          method: 'POST',
          body: JSON.stringify(loginData),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }).then((response) => console.log(response.headers))
        // .then((data) => console.log(data))
      }}
    >
      <LoginInput
        inputName="Email"
        hasButton={false}
        value={email}
        updateValue={setEmail}
      />
      <LoginInput
        inputName="Senha"
        hasButton={true}
        value={password}
        updateValue={setPassword}
      />
    </S.Form>
  )
}

export default LoginForm
