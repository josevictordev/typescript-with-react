import React from "react"
import { UserLoggedContext } from "../contexts"

export const useUserLoagged = () => {
  const context = React.useContext(UserLoggedContext)
  return context
}