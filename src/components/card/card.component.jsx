import { useContext, useEffect, useState } from 'react'
import { searchPokemon} from '../../api/api'
import { PokemonsContext } from '../../contexts/pokemons.context'
import './card.styles.scss'

const Card = ({name}) => {
  const [pokemonData, setPokemonData] = useState({})
  const {pokemons} = useContext(PokemonsContext)

  useEffect(() => {
    const getPokemon = async () => {
      const result = await searchPokemon(name)
      
      const pokemonInfo = {
        name: result.name,
        id: result.id,
        image: result.sprites.other.dream_world.front_default,
        type: result.types[0].type.name
      }
      setPokemonData(pokemonInfo)
    }

    getPokemon()
  }, [pokemons])

  return (
    <div className='card-container'>
        <div className="card-number">
            <span>#{pokemonData.id}</span>
        </div>
        <img src={pokemonData.image} alt={pokemonData.name} className='card-image'/>
        <div className="card-footer">
            <h3 className='card-name'>{name.toUpperCase()}</h3>
            <h4>Type: {pokemonData.type}</h4>
        </div>

    </div>
  )
}

export default Card