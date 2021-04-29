import PokedexDetails from './PokedexDetails';
import getRandomPokemonId from '../utils/pokemons';
import Header from '../Container/Header';

function refreshPage() {
  window.location.reload(false);
}

function RandomTeam() {
  return (
    <>
      <div className="pokedex-cards">
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
      </div>
      <div className="pokedex-explorer">
        <button type="button" onClick={refreshPage} className="pokedex-button">
          New team
        </button>
      </div>
    </>
  );
}

export default RandomTeam;
