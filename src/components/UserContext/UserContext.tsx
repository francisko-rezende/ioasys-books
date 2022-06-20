import React from 'react'

const UserContext = React.createContext({
  authorization: '',
  data: {
    birthdate: '',
    email: '',
    gender: '',
    id: '',
    name: '',
  },
})

type UserContextProps = {
  children: React.ReactNode
}

const UserProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = React.useState({
    authorization: '',
    data: {
      birthdate: '',
      email: '',
      gender: '',
      id: '',
      name: '',
    },
  })

  // const test = { user, setUser }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
