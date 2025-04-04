import React from 'react'
import AppRoutes from './routes'
import { UserLogged } from './shared/contexts'

const App = () => {
  return (
    <UserLogged>
      <AppRoutes/>
    </UserLogged>
  )
}

export default App
