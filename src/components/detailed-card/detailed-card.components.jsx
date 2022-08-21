import './detailed-card.styles.scss'

import React, { useEffect, useState } from 'react'
import { searchPokemon } from '../../api/api'

const DetailedCard = ({name}) => {
    const [pokemonData, setPokemonData] = useState({})

    useEffect(() => {
        const getPokemon = async () => {
        const result = await searchPokemon(name)
        
        const pokemonInfo = {
            name: result.name,
            id: result.id,
            image: result.sprites.other.dream_world.front_default,
            type: result.types[0].type.name,
            height: result.height,
            weight: result.weight,
            hp: result.stats[0].base_stat,
            attack: result.stats[1].base_stat,
            defense: result.stats[2].base_stat,
            spAttack: result.stats[3].base_stat,
            spDefense: result.stats[4].base_stat,
            speed: result.stats[5].base_stat,
        }
        setPokemonData(pokemonInfo)
        }

        getPokemon()
    }, [])

  return (
    <div className='detailed-card-container'>
        <div className="detailed-card-bg">
            <img src={pokemonData.image} alt={pokemonData.name} />
        </div>
        <div className="detailed-card-info">
            <h1 className='detailed-card-title'>{`#${pokemonData.id} ${pokemonData.name}`}</h1>
            <h3 className='detailed-card-type'>Type: {`${pokemonData.type}`}</h3>
            <h3 className='detailed-card-stat'>Height: {`${pokemonData.height}`}cm</h3>
            <h3 className='detailed-card-stat'>Weight: {`${pokemonData.weight}`}kg</h3>
            <h3 className='detailed-card-stat'>HP: {`${pokemonData.hp}`}</h3>
            <h3 className='detailed-card-stat'>Attack: {`${pokemonData.attack}`}</h3>
            <h3 className='detailed-card-stat'>Defense: {`${pokemonData.defense}`}</h3>
            <h3 className='detailed-card-stat'>Special-attack: {`${pokemonData.spAttack}`}</h3>
            <h3 className='detailed-card-stat'>Special-Defense: {`${pokemonData.spDefense}`}</h3>
            <h3 className='detailed-card-stat'>Speed: {`${pokemonData.speed}`}</h3>
        </div>
    </div>
  )
}

export default DetailedCard