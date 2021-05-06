import './PokemonCompared.css';
import { useEffect, useState } from 'react';
import setColorTypes from '../utils/setColorTypes';

export default function PokemonCompared({ pokemon, setPokemonSearched }) {
  const {
    sprites, types, stats, species,
  } = pokemon;
  const [colorsForCard, setColorsForCard] = useState([]);

  useEffect(() => {
    setColorTypes(pokemon, setColorsForCard);
  }, [pokemon]);

  return (
    <div className="comparator">
      <div className="search-bar">
        <input
          placeholder="search a pokemon to compare"
          onChange={(e) => setPokemonSearched(e.target.value)}
        />
        {types && (
          <div
            className="comparator-card"
            style={
              colorsForCard[1]
                ? {
                  background: `linear-gradient(${colorsForCard[0]}, ${colorsForCard[1]})`,
                  'border-radius': '10px',
                }
                : {
                  background: colorsForCard[0],
                  'border-radius': '10px',
                }
            }
          >
            {species && <h1 className="pokemon-police">{species.name}</h1>}
            {sprites && (
              <img
                className="pokemon-image"
                src={sprites.front_default}
                alt={species.name}
              />
            )}
            <div className="comparator-text">
              <div className="comparator-types">
                {types && (
                  <ul>
                    {types.map((e) => (
                      <li>{e.type.name}</li>
                    ))}
                  </ul>
                )}
              </div>
              {stats && (
                <ul>
                  {stats.map((e) => (
                    <>
                      <li>
                        <p>
                          {e.stat.name} : {e.base_stat}
                        </p>
                      </li>
                    </>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
