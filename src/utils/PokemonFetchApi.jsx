import { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonFetchApi(pokemonId) {
  const pokemonApiDefault = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemonInfos, setPokemonInfos] = useState({});
  useEffect(() => {
    axios
      .get(pokemonApiDefault + pokemonId)
      .then((res) => res.data)
      .then(setPokemonInfos);
  }, []);
  return pokemonInfos;
}
export default PokemonFetchApi;
