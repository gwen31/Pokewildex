import axios from 'axios';

const fetchPages = (currPage, setNextPage, setPrevPage, setPokemons) => {
  axios
    .get(currPage)
    .then((res) => res.data)
    .then((res) => {
      setNextPage(res.next);
      setPrevPage(res.previous);
      setPokemons(res.results);
    });
};
export default fetchPages;
