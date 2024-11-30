import { Routes, Route } from 'react-router-dom';
import Nozimjon from './pages/Nozimjon/Nozimjon';
import Asad from './pages/Asadbek/Asad'



export default function App() {
  return(
    <Routes>
      <Route path='/' element={<Nozimjon />} />
      <Route path='/asad' element={<Asad />} />
    </Routes>
  )
}

