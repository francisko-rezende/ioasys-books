import React from 'react'

import LoginInput from 'components/LoginInput'
import { useRouter } from 'next/router'
import api from 'services/api'

import * as S from './LoginForm.styles'

const LoginForm = () => {
  const [email, setEmail] = React.useState('desafio@ioasys.com.br')
  const [password, setPassword] = React.useState('12341234')

  const router = useRouter()

  return (
    <S.Form
      onSubmit={async (e) => {
        e.preventDefault()

        const loginData = {
          email,
          password,
        }

        const {
          data,
          headers: { authorization },
        } = await api.post('/auth/sign-in', loginData)

        // console.log({ data, authorization })

        if (authorization) {
          api.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${authorization}`
          localStorage.setItem('user', JSON.stringify(data))
          router.push('/home')
        }
        // const books = await api.get('/books?page=1&amount=10')

        // console.log(books)
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
