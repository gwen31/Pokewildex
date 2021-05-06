import { useState, useEffect } from 'react';
import fetchPokemonComparator from '../utils/fetchPokemonComparator';
import PokemonCompared from './PokemonCompared';
import './PokemonCompared.css';

function Comparator() {
  const [pokemon1, setPokemon1] = useState({});
  const [pokemonSearched1, setPokemonSearched1] = useState('');
  const [pokemon2, setPokemon2] = useState({});
  const [pokemonSearched2, setPokemonSearched2] = useState('');

  useEffect(() => {
    fetchPokemonComparator(pokemonSearched1, setPokemon1);
    fetchPokemonComparator(pokemonSearched2, setPokemon2);
  }, [pokemonSearched1, pokemonSearched2]);

  return (
    <div className="comparator-container">
      <PokemonCompared
        pokemon={pokemon1}
        setPokemonSearched={setPokemonSearched1}
      />
      <PokemonCompared
        pokemon={pokemon2}
        setPokemonSearched={setPokemonSearched2}
      />
    </div>
  );
}
export default Comparator;
