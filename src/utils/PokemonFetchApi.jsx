import { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonFetchApi(id) {
  const pokemonApiDefault = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    axios
      .get(pokemonApiDefault + id)
      .then((res) => res.data)
      .then(setPokemon);
  }, []);
  return pokemon;
}
export default PokemonFetchApi;
