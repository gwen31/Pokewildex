import { useEffect, useState } from 'react';
import axios from 'axios';
import API_POKEMON_DEFAULT from '../constants/api';

function PokemonFetchApi(id) {
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios
      .get(`${API_POKEMON_DEFAULT}${id}`)
      .then((res) => res.data)
      .then(setPokemon);
  }, []);
  return pokemon;
}
export default PokemonFetchApi;
