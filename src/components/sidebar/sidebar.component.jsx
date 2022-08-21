import './sidebar.styles.scss'

import {getPokemons, getPokemonsByType, POKEMON_TYPES} from '../../api/api'
import { useContext, useEffect, useState } from 'react'
import { PokemonsContext } from '../../contexts/pokemons.context'

const Sidebar = () => {
    const [types, setTypes] = useState([])
    const {setPokemons} = useContext(PokemonsContext)

    const handleTypeFilter = async (type) => {
        if(type === 'all'){
            const result = await getPokemons()
            setPokemons(result.results) 
            return
        }  else{
            const result = await getPokemonsByType(type)
            let arr = []
            for (let i in result.pokemon){
                arr.push(result.pokemon[i].pokemon)
            }
            setPokemons(arr)   
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
    <aside className='sidebar-container'>
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