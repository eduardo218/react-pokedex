import './random.styles.scss'

import DetailedCard from '../../components/detailed-card/detailed-card.components'

import {getRandomPokemon} from '../../api/api'

import React, { useState } from 'react'

const Random = () => {
    const [randomPokemon, setRandomPokemon] = useState({})

    useState(() => {
        const getNewRandomPokemon = async () => {
            const result = await getRandomPokemon()
            setRandomPokemon(result.name)
        } 

        getNewRandomPokemon()
    }, [])
    
  return (
    <div className='random-container'>
        <DetailedCard name={randomPokemon}/>
    </div>
  )
}

export default Random