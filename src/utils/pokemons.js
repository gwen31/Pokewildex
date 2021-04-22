import { maxPokemonId, minPokemonId } from '../constants/pokemonRange';

const getRandomPokemonId = () => Math.floor(Math.random() * maxPokemonId) + minPokemonId;

export default getRandomPokemonId;
