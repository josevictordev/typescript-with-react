import React from 'react'

interface IUsers{
  id: string,
  email: string,
  password: string
}

interface IUserLoggedContextData{
  userName: string;
  userEmail: string,
  logout: () => void
  users: IUsers[]
  setUsers: React.Dispatch<React.SetStateAction<IUsers[]>>;
}

interface IUserLoggedProps{
  children: React.ReactNode
}

export const UserLoggedContext = React.createContext<IUserLoggedContextData>({} as IUserLoggedContextData)

export const UserLogged: React.FC<IUserLoggedProps> = ({children}) => {

  const [users, setUsers] = React.useState<IUsers[]>(()=>{
    const saved = localStorage.getItem('users')
    return saved ? JSON.parse(saved) : []
  })

  React.useEffect(()=>{
    localStorage.setItem("users", JSON.stringify(users))
  },[users])

  const handleLogout = React.useCallback(() => {
    console.log('usuario logou!');
  }, [])

  const contextValue = {
    userName: 'jose', 
    userEmail: 'email',
    logout: handleLogout,
    users,
    setUsers
  }

  return (
    <UserLoggedContext.Provider value={contextValue}>
      {children}
    </UserLoggedContext.Provider>
  )
}

