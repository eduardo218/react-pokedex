import './home.styles.scss'

import {getPokemons} from '../../api/api'

import Card from '../../components/card/card.component'
import Sidebar from '../../components/sidebar/sidebar.component'

import { useContext, useEffect, useState } from 'react'
import { PokemonsContext } from '../../contexts/pokemons.context'

const Home = () => {
    const {pokemons, setPokemons} = useContext(PokemonsContext)
    const [count, setCount] = useState(25)

    const handleCount = () => {
        setCount(count + 25)
    }    

    useEffect(() => {
        const getAllPokemons = async () => {
            const result = await getPokemons(count, 0)
            setPokemons(result.results)            
        }

        getAllPokemons()
    }, [count])

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
            <div className="show-more-container">
                <button onClick={handleCount}>Show more...</button>
            </div>

        </>
    )
}

export default Home