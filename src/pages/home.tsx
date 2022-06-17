import React from 'react'

import Link from 'next/link'

const home = () => {
  return (
    <div>
      <h1>Página home</h1>
      <Link href="/">
        <a>Login</a>
      </Link>
    </div>
  )
}

export default home
