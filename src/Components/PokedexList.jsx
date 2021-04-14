import { useState, useEffect } from 'react';
import axios from 'axios';

const apiDefault = 'https://pokeapi.co/api/v2/pokemon';
function PokedexList({ setSelectedPokemonId }) {
  const [pokemons, setPokemons] = useState([]);
  const [currPage, setCurrPage] = useState(apiDefault);
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState([]);
  useEffect(() => {
    axios
      .get(currPage)
      .then((res) => res.data)
      .then((res) => res.results)
      .then(setPokemons);
    axios
      .get(currPage)
      .then((res) => res.data)
      .then((res) => setNextPage(res.next));
    axios
      .get(currPage)
      .then((res) => res.data)
      .then((res) => setPrevPage(res.previous));
  }, [currPage]);
  if (pokemons) {
    return (
      <>
        <ul>
          {pokemons.map((pokemon) => (
            <li>
              <a
                href={pokemon.name}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPokemonId(pokemon.name);
                }}
              >
                {pokemon.name}
              </a>
            </li>
          ))}
        </ul>
        {prevPage && (
          <button type="submit" onClick={() => setCurrPage(prevPage)}>
            Previous
          </button>
        )}
        {nextPage && (
          <button type="submit" onClick={() => setCurrPage(nextPage)}>
            Next
          </button>
        )}
      </>
    );
  }
}
export default PokedexList;
