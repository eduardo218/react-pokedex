import './home.styles.scss'

import {getPokemons} from '../../api/api'

import Card from '../../components/card/card.component'
import Sidebar from '../../components/sidebar/sidebar.component'

import { useContext, useEffect } from 'react'
import { PokemonsContext } from '../../contexts/pokemons.context'

const Home = () => {
    const {pokemons, setPokemons} = useContext(PokemonsContext)
    const {count, setCount} = useContext(PokemonsContext)

    const getAllPokemons = async () => {
        const data = await getPokemons(count)   
        setPokemons(data)               
    }

    const handleCount = () => {
        setCount(count + 25)
    }

    useEffect(() => {
        getAllPokemons()        
    }, [count])

    return (
        <>
            <Sidebar />
            <div className='home-card-list'>
                {
                    pokemons.map((pokemon, index) => {                    
                        return <Card pokemon={pokemon} key={index} />
                    })
                }            
            </div>
            <div className="show-more-container">
                <button onClick={handleCount}>Show more...</button>
            </div>

        </>
    )
}

export default Home