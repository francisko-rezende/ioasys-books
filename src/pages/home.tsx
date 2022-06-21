import React from 'react'

import BackgroundImg from 'components/BackgroundImg'
import Logo from 'components/Logo'
import MainContainer from 'components/MainContainer'
import Link from 'next/link'

const home = () => {
  // const user = localStorage.getItem('user')
  // console.log(user)
  return (
    <>
      <BackgroundImg src="/img/bg-home.svg" />
      <MainContainer>
        <h1>
          <Logo color="black" />
        </h1>
        <Link href="/">
          <a>Login</a>
        </Link>
      </MainContainer>
    </>
  )
}

export default home
