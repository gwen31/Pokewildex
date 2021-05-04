import axios from 'axios';
import { useState } from 'react';
import PokedexDetails from './PokedexDetails';
import API_POKEMON_DEFAULT from '../constants/api';

function Comparator() {
  const [searchedName1, setSearchedName1] = useState('');
  const [searchedName2, setSearchedName2] = useState('');
  const handleSearch = (pokemon, setPokemon) => {
    const nameToLower = pokemon.toLowerCase();
    setPokemon(nameToLower);
  };
  const fetchPokemon = (pokemonName, setPokemonName) => {
    axios
      .get(`${API_POKEMON_DEFAULT}${pokemonName}`)
      .then((result) => setPokemonName([result.data]))
      .catch((err) => {
        if (err.response.data === 'Not Found') {
          alert("This pokemon doesn't exist ! ");
        }
      });
  };
  const handleSubmit = (pokemon, setPokemon) => fetchPokemon(pokemon, setPokemon);

  return (
    <div className="header">
      <input
        className="explorer"
        placeholder="searchbar"
        onChange={(e) => handleSearch(e.target.value, setSearchedName1)}
      />
      {searchedName1 && (
        <button
          className="explorer"
          type="submit"
          onClick={() => handleSubmit(searchedName1, setSearchedName1)}
        >
          GO
        </button>
      )}{' '}
      <input
        className="explorer"
        placeholder="searchbar"
        onChange={(e) => handleSearch(e.target.value, setSearchedName2)}
      />
      {searchedName2 && (
        <button
          className="explorer"
          type="submit"
          onClick={() => handleSubmit(searchedName2, setSearchedName2)}
        >
          GO
        </button>
      )}
      {searchedName1 && (
        <PokedexDetails key={searchedName1} pokemonId={searchedName1} />
      )}
      {searchedName2 && (
        <PokedexDetails key={searchedName2} pokemonId={searchedName2} />
      )}
    </div>
  );
}
export default Comparator;
