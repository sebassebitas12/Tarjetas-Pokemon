import Tarjeta from '../components/Tarjeta'

const pokemones = [
    { id: 1, nombre: 'Bulbasaur', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 4, nombre: 'Charmander', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 7, nombre: 'Squirtle', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 25, nombre: 'Pikachu', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
    { id: 39, nombre: 'Jigglypuff', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png' },
    { id: 52, nombre: 'Meowth', imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png' },
]

function Inicio() {
    return (
        <div>
            <h1>Pokédex</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {pokemones.map((p) => (
                    <Tarjeta key={p.id} id={p.id} nombre={p.nombre} imagen={p.imagen} />
                ))}
            </div>
        </div>
    )
}

export default Inicio