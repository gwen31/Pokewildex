import PokedexDetails from './PokedexDetails';
import getRandomPokemonId from '../utils/pokemons';

function refreshPage() {
  window.location.reload(false);
}

function RandomTeam() {
  return (
    <>
      <button
        type="button"
        onClick={refreshPage}
        className="pokedex-button"
        style={{
          width: 200,
          margin: 45,
        }}
      >
        New team
      </button>
      <div className="pokedex-cards">
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
        <PokedexDetails pokemonId={getRandomPokemonId()} />
      </div>
    </>
  );
}

export default RandomTeam;
