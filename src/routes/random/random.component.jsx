import './random.styles.scss'

import DetailedCard from '../../components/detailed-card/detailed-card.components'
import { useEffect, useState } from 'react'
import { getRandomPokemon } from '../../api/api'

const Random = () => {  
  
    const [pokemonData, setPokemonData] = useState([])

    const handleRandomize = async () => {
        const result = await getRandomPokemon(599)
        setPokemonData([result])
        }

    useEffect(() => {
        handleRandomize()
    }, [])

    return (
      <div className='random-container'>
          {
            pokemonData.map(pokemon => 
              <DetailedCard 
                pokemon={pokemon} 
                btnString='Another one, please!'
                btnAction={handleRandomize}
                key={pokemon.id}
              />
            )
          }
      </div>
    )
}

export default Random