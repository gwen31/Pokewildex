import { useState, useEffect } from 'react';
import axios from 'axios';
import PokedexDetails from './PokedexDetails';
import API_POKEMON_DEFAULT from '../constants/api';
import LoadingScreen from './LoadingScreen';

function PokedexList() {
  const [pokemons, setPokemons] = useState([]);
  const [currPage, setCurrPage] = useState([API_POKEMON_DEFAULT]);
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState([]);
  const [searchedName, setSearchedName] = useState('');
  useEffect(() => {
    axios
      .get(currPage)
      .then((res) => res.data)
      .then((res) => {
        setNextPage(res.next);
        setPrevPage(res.previous);
        setPokemons(res.results);
      });
  }, [currPage]);

  const handleSearch = (pkmnName) => {
    const nameToLower = pkmnName.toLowerCase();
    setSearchedName(nameToLower);
  };
  const handleSubmit = () => {
    axios
      .get(`${API_POKEMON_DEFAULT}${searchedName}`)
      .then((result) => setPokemons([result.data]))
      .catch((err) => {
        if (err.response.data === 'Not Found') {
          alert("This pokemon doesn't exist ! ");
        }
      });
  };
  const handlePage = (page) => setCurrPage(page);

  return (
    <>
      <section className="pokedex-explorer">
        {prevPage && (
          <button
            className="pokedex-button"
            type="submit"
            onClick={() => handlePage(prevPage)}
          >
            ←
          </button>
        )}
        <input
          className="explorer"
          placeholder="searchbar"
          onChange={(e) => handleSearch(e.target.value)}
        />
        {searchedName && (
          <button
            className="explorer"
            type="submit"
            onClick={() => handleSubmit()}
          >
            GO
          </button>
        )}
        {nextPage && (
          <button
            className="pokedex-button"
            type="submit"
            onClick={() => handlePage(nextPage)}
          >
            →
          </button>
        )}
      </section>
      {pokemons ? (
        <div className="pokedex-cards">
          {pokemons.map((pokemon) => (
            <PokedexDetails key={pokemon.name} pokemonId={pokemon.name} />
          ))}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
export default PokedexList;
