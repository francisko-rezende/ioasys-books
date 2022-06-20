import React from 'react'

import BackgroundImg from 'components/BackgroundImg'
import LoginForm from 'components/LoginForm'
import Logo from 'components/Logo'
import MainContainer from 'components/MainContainer'

const index = () => {
  return (
    <>
      <BackgroundImg src="/img/background-img-squoosh.jpg" />
      <MainContainer>
        <h1 style={{ paddingTop: '275px' }}>
          <Logo color="white" />
        </h1>
        <LoginForm />
      </MainContainer>
    </>
  )
}

export default index
