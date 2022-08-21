import './home.styles.scss'

import {getPokemons} from '../../api/api'

import Card from '../../components/card/card.component'
import Sidebar from '../../components/sidebar/sidebar.component'

import { useContext, useEffect } from 'react'
import { PokemonsContext } from '../../contexts/pokemons.context'

const Home = () => {
    const {pokemons, setPokemons} = useContext(PokemonsContext)

    useEffect(() => {
        const getAllPokemons = async () => {
            const result = await getPokemons()
            setPokemons(result.results)            
        }

        getAllPokemons()
    }, [])

    return (
        <>
            <Sidebar />
            <div className='home-card-list'>
                {
                    pokemons.map((pokemon, index) => {                        
                        return <Card name={pokemon.name} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default Home