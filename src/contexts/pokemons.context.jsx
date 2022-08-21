import { createContext, useState } from "react";

const INITIAL_STATE = {
    pokemons: [],
    setPokemons: () => {}
}
export const PokemonsContext = createContext(INITIAL_STATE)

export const PokemonsProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([])
    const value = {pokemons, setPokemons}

    return <PokemonsContext.Provider value={value}>
        {children}
    </PokemonsContext.Provider>
}