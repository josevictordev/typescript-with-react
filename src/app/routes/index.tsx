import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Dashboard, Login } from '../pages'

const AppRoutes = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path={'/pagina-inicial'} element={<Dashboard/>}/>
      <Route path='/entrar' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes
