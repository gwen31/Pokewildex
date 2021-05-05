import axios from 'axios';
import API_POKEMON_DEFAULT from '../constants/api';

const fetchSearchPokemon = (pokemons, setPokemons) => {
  axios
    .get(`${API_POKEMON_DEFAULT}${pokemons}`)
    .then((result) => setPokemons([result.data]));
};
export default fetchSearchPokemon;
