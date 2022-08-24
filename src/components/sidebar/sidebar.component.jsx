import './sidebar.styles.scss'

import {getPokemons, getPokemonsByType, POKEMON_TYPES, searchPokemon} from '../../api/api'
import { useContext, useEffect, useState } from 'react'
import { PokemonsContext } from '../../contexts/pokemons.context'

const Sidebar = () => {
    const [types, setTypes] = useState([])
    const {setPokemons, count, typesMenu, setTypesMenu} = useContext(PokemonsContext)


    const handleTypeFilter = async (type) => {
        setPokemons([])
        setTypesMenu(false)
        if(type === 'all'){
            const data = await getPokemons(count)
           setPokemons(data)
            
        }  else{
            const data = await getPokemonsByType(type)

            const loadPokemonInfo = (result) => {
                result.forEach(async pokemon => {
                    const allPokemonInfo = await searchPokemon(pokemon.pokemon.name)
                    setPokemons(current => [...current, allPokemonInfo])
                }) 
            }
            loadPokemonInfo(data.pokemon) 
        }
    }

    useEffect(() => {
        let arr = []
        for (let key in POKEMON_TYPES){
            arr.push(POKEMON_TYPES[key])
        }
        setTypes(arr)
    }, [])
  return (
    <aside className={`sidebar-container ${typesMenu ? 'show' : 'hide'}`}>
        <ul className='sidebar-list'>
            {
                types.map((type, index) => {
                    return(
                        <li key={index}>
                            <button 
                                className='sidebar-button' 
                                onClick={() => handleTypeFilter(type.toLowerCase())}>{type}
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    </aside>
  )
}

export default Sidebar