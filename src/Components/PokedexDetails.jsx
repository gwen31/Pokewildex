import axios from 'axios';
import { useState, useEffect } from 'react';

function PokedexDetails({ pokemonId }) {
  const apiDefault = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemonInfos, setPokemonInfos] = useState({});
  const [pokemonSprites, setPokemonSprites] = useState({});
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  useEffect(() => {
    axios
      .get(apiDefault + pokemonId)
      .then((res) => res.data)
      .then(setPokemonInfos);
    axios
      .get(apiDefault + pokemonId)
      .then((res) => res.data)
      .then((res) => res.sprites)
      .then(setPokemonSprites);
    axios
      .get(apiDefault + pokemonId)
      .then((res) => res.data)
      .then((res) => res.abilities)
      .then(setPokemonAbilities);
    axios
      .get(apiDefault + pokemonId)
      .then((res) => res.data)
      .then((res) => res.types)
      .then(setPokemonTypes);
  }, []);
  if (pokemonInfos) {
    return (
      <div>
        <img src={pokemonSprites.front_default} alt={pokemonInfos.id} />
        <table>
          <tr>
            <td>id</td>
            <td>{pokemonInfos.id}</td>
          </tr>
          <tr>
            <td>name</td>
            <td>{pokemonInfos.name}</td>
          </tr>
          <tr>
            <tr>type</tr>
            <td>
              <ul>
                {pokemonTypes.map((e) => (
                  <li>{e.type.name}</li>
                ))}
              </ul>
            </td>
            <tr>Abilities</tr>
            <td>
              <ul>
                {pokemonAbilities.map((e) => (
                  <li>{e.ability.name}</li>
                ))}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default PokedexDetails;
