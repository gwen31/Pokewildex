import PokedexDetails from './PokedexDetails';

const min = 1;
const max = 898;
const randomize = () => Math.floor(Math.random() * max) + min;

function RandomTeam() {
  return (
    <div className="pokedex-cards">
      <PokedexDetails pokemonId={randomize()} />
      <PokedexDetails pokemonId={randomize()} />
      <PokedexDetails pokemonId={randomize()} />
      <PokedexDetails pokemonId={randomize()} />
      <PokedexDetails pokemonId={randomize()} />
      <PokedexDetails pokemonId={randomize()} />
    </div>
  );
}

export default RandomTeam;
