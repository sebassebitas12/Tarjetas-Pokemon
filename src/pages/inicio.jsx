import Boton from '../components/Boton'
import Tarjeta from '../components/Tarjeta'

function Inicio() {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <Tarjeta nombre="React" descripcion="Librería de JavaScript" />
      <Tarjeta nombre="Vite" descripcion="Herramienta de desarrollo" />
      <Boton texto="Empezar" />
    </div>
  )
}

export default Inicio