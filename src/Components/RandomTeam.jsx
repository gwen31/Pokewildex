import PokedexDetails from './PokedexDetails';

const min = 1;
const max = 898;
const getRandomPokemonId = () => Math.floor(Math.random() * max) + min;

function RandomTeam() {
  return (
    <div className="pokedex-cards">
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
