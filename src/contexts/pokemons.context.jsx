import { createContext, useState } from "react";

const INITIAL_STATE = {
    pokemons: [],
    setPokemons: () => {},
    count: 25,
    setCount: () => {},
    typesMenu: false,
    setTypesMenu: () => {}
    
}
export const PokemonsContext = createContext(INITIAL_STATE)

export const PokemonsProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([])
    const [count, setCount] = useState(25)
    const [typesMenu, setTypesMenu] = useState(false)
    const value = {pokemons, setPokemons, count, setCount, typesMenu, setTypesMenu}

    return <PokemonsContext.Provider value={value}>
        {children}
    </PokemonsContext.Provider>
}