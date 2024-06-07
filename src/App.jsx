import Home from './pages/Home'
import ListRdv from './pages/ListRdv'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rdv' element={<ListRdv />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
