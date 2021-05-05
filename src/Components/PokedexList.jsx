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

  const handleSubmit = () => {
    axios
      .get(`${API_POKEMON_DEFAULT}${searchedName}`)
      .then((result) => setPokemons([result.data]));
  };

  const fetchPages = () => {
    axios
      .get(currPage)
      .then((res) => res.data)
      .then((res) => {
        setNextPage(res.next);
        setPrevPage(res.previous);
        setPokemons(res.results);
      });
  };

  useEffect(() => {
    fetchPages();
    if (searchedName) {
      handleSubmit();
    }
  }, [currPage, searchedName]);

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
          onChange={(e) => setSearchedName(e.target.value)}
        />
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
