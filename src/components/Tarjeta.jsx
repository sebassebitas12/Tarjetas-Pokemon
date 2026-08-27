import { Link } from 'react-router-dom'

function Tarjeta({ id, nombre, imagen }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', textAlign: 'center', width: '150px' }}>
      <img src={imagen} alt={nombre} width="100" />
      <h3>#{id} {nombre}</h3>
      <Link to={`/pokemon/${id}`}>Ver más</Link>
    </div>
  )
}

export default Tarjeta