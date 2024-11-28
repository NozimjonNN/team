import { Routes, Route } from 'react-router-dom';
import Nozimjon from './pages/Nozimjon/Nozimjon';
import Home from './pages/home/Home';

export default function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/nozimjon' element={<Nozimjon />} />
    </Routes>
  )
}
