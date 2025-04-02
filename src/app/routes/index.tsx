import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Dashboard } from '../pages'

const AppRoutes = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes
