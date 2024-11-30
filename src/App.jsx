
import { Routes, Route } from 'react-router-dom';
import Nozimjon from './pages/Nozimjon/Nozimjon';
// import Asad from './pages/Asadbek/Asad'
import Ruxsora from './pages/Ruxsora/Ruxsora';
import Farruh from './pages/Farruh/Farruh';

export default function App() {
  return(
    <Routes>
      <Route path='/' element={<Nozimjon />} />
      {/* <Route path='/asad' element={<Asad />} /> */}
      <Route path='/ruxsora' element={<Ruxsora />} />
      <Route path='/farruh' element={<Farruh />} />
    </Routes>
  )
}
