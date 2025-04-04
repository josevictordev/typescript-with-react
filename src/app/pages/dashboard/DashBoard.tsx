import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Dashboard  = () => {
  const navigate = useNavigate()

  const [list, setList] = React.useState<string[]>([])

  const addToList: React.KeyboardEventHandler<HTMLInputElement> = React.useCallback((e) => {
    if (e.key === "Enter") {
      if (e.currentTarget.value.length < 0) return
      if (e.currentTarget.value.trim().length < 0) return

      const value = e.currentTarget.value

      setList((oldList) => {
       return [...oldList, value]
      })
      e.currentTarget.value = ""
    }
  },[])

  function handleClick() {
    navigate('/entrar')
  }

  return(
   <div>
      <input type="text" onKeyDown={addToList}/>
      <ul>
        {list.map(value => <li>{value}</li>)}
      </ul>
     <p>Dashboard</p>
     <button type='button' onClick={handleClick}>Login</button>
   </div>
  )
}