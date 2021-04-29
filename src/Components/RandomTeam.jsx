import PokedexDetails from './PokedexDetails';
import getRandomPokemonId from '../utils/pokemons';
import Header from '../Container/Header';

function RandomTeam() {
  return (
    <div className="pokedex-cards">
      <div className="header">
        <Header />
      </div>
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
    </div>
  );
}

export default RandomTeam;
