import { maxPokemonId, minPokemonId } from '../constants/PokemonRange';

const getRandomPokemonId = () => Math.floor(Math.random() * maxPokemonId) + minPokemonId;

export default getRandomPokemonId;
