import React from 'react'

import Logo from 'components/Logo'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <h1>
        <Logo /> Books
      </h1>

      <Link href="/home">
        <a>Home</a>
      </Link>
    </div>
  )
}

export default index
