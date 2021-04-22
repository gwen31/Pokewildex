import { useState, useEffect } from 'react';
import axios from 'axios';
import API_POKEMON_DEFAULT from '../constants/api';

const [pokemons, setPokemons] = useState([]);
const currPage = API_POKEMON_DEFAULT;
const [nextPage, setNextPage] = useState([]);
const [prevPage, setPrevPage] = useState([]);
useEffect(() => {
  axios
    .get(currPage)
    .then((res) => res.data)
    .then((res) => {
      setNextPage(res.next);
      setPrevPage(res.previous);
      return res.results;
    })
    .then(setPokemons);
}, [currPage]);

export default {
  currPage,
  pokemons,
  nextPage,
  prevPage,
};
