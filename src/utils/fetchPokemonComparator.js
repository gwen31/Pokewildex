import axios from 'axios';
import API_POKEMON_DEFAULT from '../constants/api';

const fetchPokemonComparator = (pokemonToCompare, setPokemon) => {
  axios
    .get(`${API_POKEMON_DEFAULT}${pokemonToCompare}`)
    .then((r) => r.data)
    .then(setPokemon);
};
export default fetchPokemonComparator;
