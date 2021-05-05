import './PokemonCompared.css';

export default function PokemonCompared({ pokemon, setPokemonSearched }) {
  const {
    sprites, types, stats, species,
  } = pokemon;
  return (
    <div className="comparator">
      <div className="search-bar">
        <input
          placeholder="search a fOOkin pokemon, mate !"
          onChange={(e) => setPokemonSearched(e.target.value)}
        />
        <div className="comparator-card">
          {species && <h1>{species.name}</h1>}
          {sprites && (
            <img
              className="pokemon-image"
              src={sprites.front_default}
              alt={species.name}
            />
          )}
          {types && (
            <ul>
              {types.map((e) => (
                <li>{e.type.name}</li>
              ))}
            </ul>
          )}
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
    </div>
  );
}
