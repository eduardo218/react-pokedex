const BASE_URL = 'https://pokeapi.co/api/v2'


export const POKEMON_TYPES = {
    all: 'All',
    normal: 'Normal',
    fighting: 'Fighting',
    flying: 'Flying',
    poison: 'Poison',
    ground: 'Ground',
    rock: 'Rock',
    bug: 'Bug',
    ghost: 'Ghost',
    steel: 'Steel',
    fire: 'Fire',
    water: 'Water',
    grass: 'Grass',
    electric: 'Electric',
    psychic: 'Psychic',
    ice: 'Ice',
    dragon: 'Dragon',
    dark: 'Dark',
    fairy: 'Fairy'
}

export const searchPokemon = async (pokemon) => {
    try{
        const response = await fetch(`${BASE_URL}/pokemon/${pokemon}`)
        return await response.json()
    }catch(error){
        return 'pokemon not found'
    }
}

export const getPokemons = async (limit = 25) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`)
        const result = await response.json()             

        return result.results
    }catch(error){
        console.log(`Error in getPokemons: ${error}`)
    }
}

export const getPokemonsByType = async (type) => {
    try{
        const response = await fetch(`${BASE_URL}/type/${type}`)
        return await response.json()
    }catch(error){
        console.log(`Error in getPokemonsByType: ${error}`)
    }
}

export const getRandomPokemon = async (range = 150) => {
    const RANDOM_ID = Math.floor(Math.random() * (range - 1) + 1)
    try{
        const response = await fetch(`${BASE_URL}/pokemon/${RANDOM_ID}`)
        return await response.json()
    }catch(error){
        console.log(`Error in getRandomPokemon: ${error}`)
    }
}