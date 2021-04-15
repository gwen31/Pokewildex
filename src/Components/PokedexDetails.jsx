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
      <div className="pokedex-card">
        <div className="pokedex-card-additional">
          <div className="more-infos">
            <img
              className="pokedex-card-image"
              src={pokemonSprites.front_default}
              alt={pokemonInfos.id}
            />
            <div className="pokedex-card-description pokedex-card-right">
              <div className="pokedex-card-textblock name">
                {pokemonInfos.name}
              </div>
              <div className="pokedex-card-textblock Id">
                <strong>Id</strong> {pokemonInfos.id}
              </div>
              <div className="pokedex-card-textblock types">
                <strong>type:</strong>
                {pokemonTypes.map((e) => (
                  <li>{e.type.name}</li>
                ))}
              </div>
              <div className="pokedex-card-textblock abilities">
                <strong>Abilities :</strong>
                {pokemonAbilities.map((e) => (
                  <li>{e.ability.name}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pokedex-card-center name">
          <h2 className="pokemon-police">{pokemonInfos.name}</h2>
        </div>
      </div>
    );
  }
}
export default PokedexDetails;
