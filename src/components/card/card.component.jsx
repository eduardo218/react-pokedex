import './card.styles.scss'

import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { searchPokemon } from '../../api/api'


const Card = ({pokemon}) => {

  const [pokemonData, setPokemonData] = useState({})

  useEffect(() => {
    const getPokemon = async () => {
      const result = await searchPokemon(pokemon.name)
      
      const pokemonInfo = {
        name: result.name,
        id: result.id,
        image: result.sprites.other.dream_world.front_default,
        type: result.types[0].type.name
      }
      setPokemonData(pokemonInfo)
    }

    getPokemon()
  }, [])

  const navigate = useNavigate()

  const { id, name, image, type} = pokemonData

  const handleNavigate = () => {
    navigate(`/details/${name}`)
  }

  return (
    <div className='card-container' onClick={handleNavigate}>
        <div className="card-number">
            <span>#{id}</span>
        </div>
        <img src={image} alt={name} className='card-image'/>
        <div className="card-footer">
            <h3 className='card-name'>{name}</h3>
            <h4>Type: {type}</h4>
        </div>

    </div>
  )
}

export default Card