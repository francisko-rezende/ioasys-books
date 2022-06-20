import React from 'react'

import BackgroundImg from 'components/BackgroundImg'
import Link from 'next/link'

const home = () => {
  return (
    <>
      <BackgroundImg src="/img/bg-home.svg" />
      <h1>Página home</h1>
      <Link href="/">
        <a>Login</a>
      </Link>
    </>
  )
}

export default home
