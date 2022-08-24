import './search.styles.scss'

import DetaildedCard from '../../components/detailed-card/detailed-card.components'
import {searchPokemon} from '../../api/api'
import { useEffect, useState } from 'react'
import DetailedCard from '../../components/detailed-card/detailed-card.components'

const Search = () => {
  const [pokemon, setPokemon] = useState()
  const [pokemonName, setPokemonName] = useState("")
  const [hideSearch, setHideSearch] = useState(false)

  
  const handleChange = (e) => {
    const word = e.target.value.toLowerCase()
    setPokemonName(word)
  }

  const handleSearch = async () => {
      const res = await searchPokemon(pokemonName)
      if (res !== 'pokemon not found'){
        setPokemon(res)  
        setHideSearch(true)   
      }else{
        alert('Pokemon not found')
      }        
  }

  const handleNewSearch = () => {
    setPokemon()
    setPokemonName('')
    setHideSearch(false)
  }

  useEffect(() => {
  }, [pokemon])

  return (
    <div className='search-container'>
      <div className={`search-box ${hideSearch ? 'hide' : 'show'}`}> 
        <input 
          type="text" 
          placeholder='Pokemon name' 
          onChange={handleChange} 
          value={pokemonName}
          />          
        <button onClick={handleSearch}>Search</button>
      </div>
      {pokemon &&
          <DetailedCard 
          btnAction={handleNewSearch}
            btnString='New Search'
            pokemon={pokemon}
            key={pokemon.id}
          />
      }
        
    </div>
  )
}

export default Search