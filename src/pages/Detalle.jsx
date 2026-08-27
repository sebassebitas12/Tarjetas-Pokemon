import { useParams, Link } from 'react-router-dom'

const pokemones = [
    { id: 1, nombre: 'Bulbasaur', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', tipo: 'Planta/Veneno' },
    { id: 4, nombre: 'Charmander', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', tipo: 'Fuego' },
    { id: 7, nombre: 'Squirtle', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png', tipo: 'Agua' },
    { id: 25, nombre: 'Pikachu', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', tipo: 'Eléctrico' },
    { id: 39, nombre: 'Jigglypuff', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png', tipo: 'Normal/Hada' },
    { id: 52, nombre: 'Meowth', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png', tipo: 'Normal' },
]

function Detalle() {
    const { id } = useParams()
    const pokemon = pokemones.find((p) => p.id === parseInt(id))

    if (!pokemon) return <p>Pokémon no encontrado</p>

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>#{pokemon.id} {pokemon.nombre}</h1>
            <img src={pokemon.imagen} alt={pokemon.nombre} width="150" />
            <p>Tipo: {pokemon.tipo}</p>
            <Link to="/">← Volver</Link>
        </div>
    )
}

export default Detalle