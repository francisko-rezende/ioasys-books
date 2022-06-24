import React from 'react'

import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  React.useEffect(() => {
    router.push('https://duckduckgo.com/')
  })

  return null
}

export default NotFound
