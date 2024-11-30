import { Routes, Route } from 'react-router-dom';
import Nozimjon from './pages/Nozimjon/Nozimjon';
import Home from './pages/home/Home';
import Farruh from './pages/Farruh/Farruh'
export default function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/nozimjon' element={<Nozimjon />} />
      <Route path='/Farruh' element={<Farruh/>} />
    </Routes>
  )
}
