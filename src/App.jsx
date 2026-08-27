import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Detalle from './pages/Detalle'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Pokédex</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pokemon/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App