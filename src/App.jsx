// Importamos las herramientas de React Router para manejar rutas
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Importamos las páginas del proyecto
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'

// Componente principal que organiza toda la app
function App() {
  return (
    // BrowserRouter habilita el sistema de rutas
    <BrowserRouter>

      {/* Menú de navegación con Links que no recargan la página */}
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/contacto">Contacto</Link>
      </nav>

      {/* Routes contiene todas las rutas de la app */}
      <Routes>
        {/* Ruta principal muestra la página Inicio */}
        <Route path="/" element={<Inicio />} />

        {/* Ruta /contacto muestra la página Contacto */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

    </BrowserRouter>
  )
}

// Exportamos App para que main.jsx pueda montarlo
export default App