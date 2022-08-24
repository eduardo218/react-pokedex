import './detailed-card.styles.scss'

const DetailedCard = ({pokemon, btnString, btnAction}) => {
    
    const pokemonInfo = {
        name: pokemon.name,
        id: pokemon.id,
        image: pokemon.sprites.other.dream_world.front_default,
        type: pokemon.types[0].type.name,
        height: (pokemon.height / 10),
        weight: (pokemon.weight  / 10),
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        spAttack: pokemon.stats[3].base_stat,
        spDefense: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
    }

  return (
    <div className='detailed-card-container'>
        <div className="detailed-card-bg">
            <img src={pokemonInfo.image} alt={pokemonInfo.name} />
        </div>
        <div className="detailed-card-info">
            <h1 className='detailed-card-title'>{`#${pokemonInfo.id} ${pokemonInfo.name}`}</h1>
            <h3 className='detailed-card-type'>Type: {`${pokemonInfo.type}`}</h3>
            <h3 className='detailed-card-stat'>Height: {`${pokemonInfo.height}`}m</h3>
            <h3 className='detailed-card-stat'>Weight: {`${pokemonInfo.weight}`}kg</h3>
            <h3 className='detailed-card-stat'>HP: {`${pokemonInfo.hp}`}</h3>
            <h3 className='detailed-card-stat'>Attack: {`${pokemonInfo.attack}`}</h3>
            <h3 className='detailed-card-stat'>Defense: {`${pokemonInfo.defense}`}</h3>
            <h3 className='detailed-card-stat'>Special-attack: {`${pokemonInfo.spAttack}`}</h3>
            <h3 className='detailed-card-stat'>Special-Defense: {`${pokemonInfo.spDefense}`}</h3>
            <h3 className='detailed-card-stat'>Speed: {`${pokemonInfo.speed}`}</h3>
            <button className='detailed-card-button' onClick={btnAction}>{btnString}</button>
        </div>
    </div>
  )
}

export default DetailedCard