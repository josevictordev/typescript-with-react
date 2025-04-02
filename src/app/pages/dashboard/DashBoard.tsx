import {useNavigate} from 'react-router-dom'

export const Dashboard  = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/entrar')
  }

  return(
   <div>
     <p>Dashboard</p>
     <button type='button' onClick={handleClick}>Login</button>
   </div>
  )
}