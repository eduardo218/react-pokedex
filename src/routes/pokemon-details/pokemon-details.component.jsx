import './pokemon-details.styles.scss'

import { useNavigate, useParams } from 'react-router-dom'

import { searchPokemon } from '../../api/api'
import { useEffect, useState } from 'react'
import DetailedCard from '../../components/detailed-card/detailed-card.components'

const PokemonDetails = () => {
    const param = useParams()
    const navigate = useNavigate()

    const [pokemonData, setPokemonData] = useState([])

    const getPokemonInfo = async () => {
        const result = await searchPokemon(param.name)
        setPokemonData([result])
    }

    const handleBackToHome = () => {
        navigate('/')
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])

  return (

    <div className='pokemon-details-container'>
        {
            pokemonData.map(pokemon => 
                <DetailedCard 
                    pokemon={pokemon} 
                    btnString='Back to home'
                    btnAction={handleBackToHome}
                    key={pokemon.id}
                />)
        }
    </div>
  )
}

export default PokemonDetails